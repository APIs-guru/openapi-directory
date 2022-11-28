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
// GoogleCloudSecuritycenterV1MuteConfig
/**
 * A mute config is a Cloud SCC resource that contains the configuration to mute create/update events of findings.
**/
var GoogleCloudSecuritycenterV1MuteConfig = /** @class */ (function (_super) {
    __extends(GoogleCloudSecuritycenterV1MuteConfig, _super);
    function GoogleCloudSecuritycenterV1MuteConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudSecuritycenterV1MuteConfig.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudSecuritycenterV1MuteConfig.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudSecuritycenterV1MuteConfig.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter" }),
        __metadata("design:type", String)
    ], GoogleCloudSecuritycenterV1MuteConfig.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mostRecentEditor" }),
        __metadata("design:type", String)
    ], GoogleCloudSecuritycenterV1MuteConfig.prototype, "mostRecentEditor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudSecuritycenterV1MuteConfig.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudSecuritycenterV1MuteConfig.prototype, "updateTime", void 0);
    return GoogleCloudSecuritycenterV1MuteConfig;
}(SpeakeasyBase));
export { GoogleCloudSecuritycenterV1MuteConfig };
// GoogleCloudSecuritycenterV1MuteConfigInput
/**
 * A mute config is a Cloud SCC resource that contains the configuration to mute create/update events of findings.
**/
var GoogleCloudSecuritycenterV1MuteConfigInput = /** @class */ (function (_super) {
    __extends(GoogleCloudSecuritycenterV1MuteConfigInput, _super);
    function GoogleCloudSecuritycenterV1MuteConfigInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudSecuritycenterV1MuteConfigInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudSecuritycenterV1MuteConfigInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter" }),
        __metadata("design:type", String)
    ], GoogleCloudSecuritycenterV1MuteConfigInput.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudSecuritycenterV1MuteConfigInput.prototype, "name", void 0);
    return GoogleCloudSecuritycenterV1MuteConfigInput;
}(SpeakeasyBase));
export { GoogleCloudSecuritycenterV1MuteConfigInput };
