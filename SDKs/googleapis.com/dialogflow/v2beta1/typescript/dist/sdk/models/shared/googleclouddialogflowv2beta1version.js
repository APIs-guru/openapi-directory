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
export var GoogleCloudDialogflowV2beta1VersionStatusEnum;
(function (GoogleCloudDialogflowV2beta1VersionStatusEnum) {
    GoogleCloudDialogflowV2beta1VersionStatusEnum["VersionStatusUnspecified"] = "VERSION_STATUS_UNSPECIFIED";
    GoogleCloudDialogflowV2beta1VersionStatusEnum["InProgress"] = "IN_PROGRESS";
    GoogleCloudDialogflowV2beta1VersionStatusEnum["Ready"] = "READY";
    GoogleCloudDialogflowV2beta1VersionStatusEnum["Failed"] = "FAILED";
})(GoogleCloudDialogflowV2beta1VersionStatusEnum || (GoogleCloudDialogflowV2beta1VersionStatusEnum = {}));
// GoogleCloudDialogflowV2beta1Version
/**
 * You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for: - testing - development - production - etc. For more information, see the [versions and environments guide](https://cloud.google.com/dialogflow/docs/agents-versions).
**/
var GoogleCloudDialogflowV2beta1Version = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2beta1Version, _super);
    function GoogleCloudDialogflowV2beta1Version() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1Version.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1Version.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1Version.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1Version.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=versionNumber" }),
        __metadata("design:type", Number)
    ], GoogleCloudDialogflowV2beta1Version.prototype, "versionNumber", void 0);
    return GoogleCloudDialogflowV2beta1Version;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2beta1Version };
// GoogleCloudDialogflowV2beta1VersionInput
/**
 * You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for: - testing - development - production - etc. For more information, see the [versions and environments guide](https://cloud.google.com/dialogflow/docs/agents-versions).
**/
var GoogleCloudDialogflowV2beta1VersionInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowV2beta1VersionInput, _super);
    function GoogleCloudDialogflowV2beta1VersionInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowV2beta1VersionInput.prototype, "description", void 0);
    return GoogleCloudDialogflowV2beta1VersionInput;
}(SpeakeasyBase));
export { GoogleCloudDialogflowV2beta1VersionInput };
