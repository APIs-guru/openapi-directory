var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PoolOption } from "./pooloption";
import { Volume } from "./volume";
export var BuildOptionsLogStreamingOptionEnum;
(function (BuildOptionsLogStreamingOptionEnum) {
    BuildOptionsLogStreamingOptionEnum["StreamDefault"] = "STREAM_DEFAULT";
    BuildOptionsLogStreamingOptionEnum["StreamOn"] = "STREAM_ON";
    BuildOptionsLogStreamingOptionEnum["StreamOff"] = "STREAM_OFF";
})(BuildOptionsLogStreamingOptionEnum || (BuildOptionsLogStreamingOptionEnum = {}));
export var BuildOptionsLoggingEnum;
(function (BuildOptionsLoggingEnum) {
    BuildOptionsLoggingEnum["LoggingUnspecified"] = "LOGGING_UNSPECIFIED";
    BuildOptionsLoggingEnum["Legacy"] = "LEGACY";
    BuildOptionsLoggingEnum["GcsOnly"] = "GCS_ONLY";
    BuildOptionsLoggingEnum["StackdriverOnly"] = "STACKDRIVER_ONLY";
    BuildOptionsLoggingEnum["CloudLoggingOnly"] = "CLOUD_LOGGING_ONLY";
    BuildOptionsLoggingEnum["None"] = "NONE";
})(BuildOptionsLoggingEnum || (BuildOptionsLoggingEnum = {}));
export var BuildOptionsMachineTypeEnum;
(function (BuildOptionsMachineTypeEnum) {
    BuildOptionsMachineTypeEnum["Unspecified"] = "UNSPECIFIED";
    BuildOptionsMachineTypeEnum["N1Highcpu8"] = "N1_HIGHCPU_8";
    BuildOptionsMachineTypeEnum["N1Highcpu32"] = "N1_HIGHCPU_32";
    BuildOptionsMachineTypeEnum["E2Highcpu8"] = "E2_HIGHCPU_8";
    BuildOptionsMachineTypeEnum["E2Highcpu32"] = "E2_HIGHCPU_32";
})(BuildOptionsMachineTypeEnum || (BuildOptionsMachineTypeEnum = {}));
export var BuildOptionsRequestedVerifyOptionEnum;
(function (BuildOptionsRequestedVerifyOptionEnum) {
    BuildOptionsRequestedVerifyOptionEnum["NotVerified"] = "NOT_VERIFIED";
    BuildOptionsRequestedVerifyOptionEnum["Verified"] = "VERIFIED";
})(BuildOptionsRequestedVerifyOptionEnum || (BuildOptionsRequestedVerifyOptionEnum = {}));
export var BuildOptionsSourceProvenanceHashEnum;
(function (BuildOptionsSourceProvenanceHashEnum) {
    BuildOptionsSourceProvenanceHashEnum["None"] = "NONE";
    BuildOptionsSourceProvenanceHashEnum["Sha256"] = "SHA256";
    BuildOptionsSourceProvenanceHashEnum["Md5"] = "MD5";
})(BuildOptionsSourceProvenanceHashEnum || (BuildOptionsSourceProvenanceHashEnum = {}));
export var BuildOptionsSubstitutionOptionEnum;
(function (BuildOptionsSubstitutionOptionEnum) {
    BuildOptionsSubstitutionOptionEnum["MustMatch"] = "MUST_MATCH";
    BuildOptionsSubstitutionOptionEnum["AllowLoose"] = "ALLOW_LOOSE";
})(BuildOptionsSubstitutionOptionEnum || (BuildOptionsSubstitutionOptionEnum = {}));
// BuildOptions
/**
 * Optional arguments to enable specific features of builds.
**/
var BuildOptions = /** @class */ (function (_super) {
    __extends(BuildOptions, _super);
    function BuildOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diskSizeGb" }),
        __metadata("design:type", String)
    ], BuildOptions.prototype, "diskSizeGb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dynamicSubstitutions" }),
        __metadata("design:type", Boolean)
    ], BuildOptions.prototype, "dynamicSubstitutions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=env" }),
        __metadata("design:type", Array)
    ], BuildOptions.prototype, "env", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logStreamingOption" }),
        __metadata("design:type", String)
    ], BuildOptions.prototype, "logStreamingOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logging" }),
        __metadata("design:type", String)
    ], BuildOptions.prototype, "logging", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=machineType" }),
        __metadata("design:type", String)
    ], BuildOptions.prototype, "machineType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pool" }),
        __metadata("design:type", PoolOption)
    ], BuildOptions.prototype, "pool", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestedVerifyOption" }),
        __metadata("design:type", String)
    ], BuildOptions.prototype, "requestedVerifyOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secretEnv" }),
        __metadata("design:type", Array)
    ], BuildOptions.prototype, "secretEnv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceProvenanceHash" }),
        __metadata("design:type", Array)
    ], BuildOptions.prototype, "sourceProvenanceHash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=substitutionOption" }),
        __metadata("design:type", String)
    ], BuildOptions.prototype, "substitutionOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volumes", elemType: Volume }),
        __metadata("design:type", Array)
    ], BuildOptions.prototype, "volumes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workerPool" }),
        __metadata("design:type", String)
    ], BuildOptions.prototype, "workerPool", void 0);
    return BuildOptions;
}(SpeakeasyBase));
export { BuildOptions };
