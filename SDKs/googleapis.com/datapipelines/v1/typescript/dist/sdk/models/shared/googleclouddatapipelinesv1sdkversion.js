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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export var GoogleCloudDatapipelinesV1SdkVersionSdkSupportStatusEnum;
(function (GoogleCloudDatapipelinesV1SdkVersionSdkSupportStatusEnum) {
    GoogleCloudDatapipelinesV1SdkVersionSdkSupportStatusEnum["Unknown"] = "UNKNOWN";
    GoogleCloudDatapipelinesV1SdkVersionSdkSupportStatusEnum["Supported"] = "SUPPORTED";
    GoogleCloudDatapipelinesV1SdkVersionSdkSupportStatusEnum["Stale"] = "STALE";
    GoogleCloudDatapipelinesV1SdkVersionSdkSupportStatusEnum["Deprecated"] = "DEPRECATED";
    GoogleCloudDatapipelinesV1SdkVersionSdkSupportStatusEnum["Unsupported"] = "UNSUPPORTED";
})(GoogleCloudDatapipelinesV1SdkVersionSdkSupportStatusEnum || (GoogleCloudDatapipelinesV1SdkVersionSdkSupportStatusEnum = {}));
// GoogleCloudDatapipelinesV1SdkVersion
/**
 * The version of the SDK used to run the job.
**/
var GoogleCloudDatapipelinesV1SdkVersion = /** @class */ (function (_super) {
    __extends(GoogleCloudDatapipelinesV1SdkVersion, _super);
    function GoogleCloudDatapipelinesV1SdkVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=sdkSupportStatus" }),
        __metadata("design:type", String)
    ], GoogleCloudDatapipelinesV1SdkVersion.prototype, "sdkSupportStatus", void 0);
    __decorate([
        Metadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], GoogleCloudDatapipelinesV1SdkVersion.prototype, "version", void 0);
    __decorate([
        Metadata({ data: "json, name=versionDisplayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDatapipelinesV1SdkVersion.prototype, "versionDisplayName", void 0);
    return GoogleCloudDatapipelinesV1SdkVersion;
}(SpeakeasyBase));
export { GoogleCloudDatapipelinesV1SdkVersion };
