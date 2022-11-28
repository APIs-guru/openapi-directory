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
var GetOrganizationConfigTemplateSwitchProfilePortsPathParams = /** @class */ (function (_super) {
    __extends(GetOrganizationConfigTemplateSwitchProfilePortsPathParams, _super);
    function GetOrganizationConfigTemplateSwitchProfilePortsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=configTemplateId" }),
        __metadata("design:type", String)
    ], GetOrganizationConfigTemplateSwitchProfilePortsPathParams.prototype, "configTemplateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" }),
        __metadata("design:type", String)
    ], GetOrganizationConfigTemplateSwitchProfilePortsPathParams.prototype, "organizationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], GetOrganizationConfigTemplateSwitchProfilePortsPathParams.prototype, "profileId", void 0);
    return GetOrganizationConfigTemplateSwitchProfilePortsPathParams;
}(SpeakeasyBase));
export { GetOrganizationConfigTemplateSwitchProfilePortsPathParams };
var GetOrganizationConfigTemplateSwitchProfilePortsRequest = /** @class */ (function (_super) {
    __extends(GetOrganizationConfigTemplateSwitchProfilePortsRequest, _super);
    function GetOrganizationConfigTemplateSwitchProfilePortsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetOrganizationConfigTemplateSwitchProfilePortsPathParams)
    ], GetOrganizationConfigTemplateSwitchProfilePortsRequest.prototype, "pathParams", void 0);
    return GetOrganizationConfigTemplateSwitchProfilePortsRequest;
}(SpeakeasyBase));
export { GetOrganizationConfigTemplateSwitchProfilePortsRequest };
var GetOrganizationConfigTemplateSwitchProfilePortsResponse = /** @class */ (function (_super) {
    __extends(GetOrganizationConfigTemplateSwitchProfilePortsResponse, _super);
    function GetOrganizationConfigTemplateSwitchProfilePortsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetOrganizationConfigTemplateSwitchProfilePortsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetOrganizationConfigTemplateSwitchProfilePortsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetOrganizationConfigTemplateSwitchProfilePortsResponse.prototype, "getOrganizationConfigTemplateSwitchProfilePorts200ApplicationJsonObject", void 0);
    return GetOrganizationConfigTemplateSwitchProfilePortsResponse;
}(SpeakeasyBase));
export { GetOrganizationConfigTemplateSwitchProfilePortsResponse };
