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
import { GoogleCloudDocumentaiV1ProcessorVersionDeprecationInfo } from "./googleclouddocumentaiv1processorversiondeprecationinfo";
import { GoogleCloudDocumentaiV1DocumentSchema } from "./googleclouddocumentaiv1documentschema";
export var GoogleCloudDocumentaiV1ProcessorVersionStateEnum;
(function (GoogleCloudDocumentaiV1ProcessorVersionStateEnum) {
    GoogleCloudDocumentaiV1ProcessorVersionStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    GoogleCloudDocumentaiV1ProcessorVersionStateEnum["Deployed"] = "DEPLOYED";
    GoogleCloudDocumentaiV1ProcessorVersionStateEnum["Deploying"] = "DEPLOYING";
    GoogleCloudDocumentaiV1ProcessorVersionStateEnum["Undeployed"] = "UNDEPLOYED";
    GoogleCloudDocumentaiV1ProcessorVersionStateEnum["Undeploying"] = "UNDEPLOYING";
    GoogleCloudDocumentaiV1ProcessorVersionStateEnum["Creating"] = "CREATING";
    GoogleCloudDocumentaiV1ProcessorVersionStateEnum["Deleting"] = "DELETING";
    GoogleCloudDocumentaiV1ProcessorVersionStateEnum["Failed"] = "FAILED";
})(GoogleCloudDocumentaiV1ProcessorVersionStateEnum || (GoogleCloudDocumentaiV1ProcessorVersionStateEnum = {}));
// GoogleCloudDocumentaiV1ProcessorVersion
/**
 * A processor version is an implementation of a processor. Each processor can have multiple versions, pre-trained by Google internally or up-trained by the customer. At a time, a processor can only have one default version version. So the processor's behavior (when processing documents) is defined by a default version
**/
var GoogleCloudDocumentaiV1ProcessorVersion = /** @class */ (function (_super) {
    __extends(GoogleCloudDocumentaiV1ProcessorVersion, _super);
    function GoogleCloudDocumentaiV1ProcessorVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1ProcessorVersion.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deprecationInfo" }),
        __metadata("design:type", GoogleCloudDocumentaiV1ProcessorVersionDeprecationInfo)
    ], GoogleCloudDocumentaiV1ProcessorVersion.prototype, "deprecationInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1ProcessorVersion.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentSchema" }),
        __metadata("design:type", GoogleCloudDocumentaiV1DocumentSchema)
    ], GoogleCloudDocumentaiV1ProcessorVersion.prototype, "documentSchema", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=googleManaged" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudDocumentaiV1ProcessorVersion.prototype, "googleManaged", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kmsKeyName" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1ProcessorVersion.prototype, "kmsKeyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kmsKeyVersionName" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1ProcessorVersion.prototype, "kmsKeyVersionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1ProcessorVersion.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1ProcessorVersion.prototype, "state", void 0);
    return GoogleCloudDocumentaiV1ProcessorVersion;
}(SpeakeasyBase));
export { GoogleCloudDocumentaiV1ProcessorVersion };
