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
import * as shared from "../shared";
var GetSetupV1LocationsIdEmailTemplatesMasterPathParams = /** @class */ (function (_super) {
    __extends(GetSetupV1LocationsIdEmailTemplatesMasterPathParams, _super);
    function GetSetupV1LocationsIdEmailTemplatesMasterPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetSetupV1LocationsIdEmailTemplatesMasterPathParams.prototype, "id", void 0);
    return GetSetupV1LocationsIdEmailTemplatesMasterPathParams;
}(SpeakeasyBase));
export { GetSetupV1LocationsIdEmailTemplatesMasterPathParams };
var GetSetupV1LocationsIdEmailTemplatesMasterRequest = /** @class */ (function (_super) {
    __extends(GetSetupV1LocationsIdEmailTemplatesMasterRequest, _super);
    function GetSetupV1LocationsIdEmailTemplatesMasterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSetupV1LocationsIdEmailTemplatesMasterPathParams)
    ], GetSetupV1LocationsIdEmailTemplatesMasterRequest.prototype, "pathParams", void 0);
    return GetSetupV1LocationsIdEmailTemplatesMasterRequest;
}(SpeakeasyBase));
export { GetSetupV1LocationsIdEmailTemplatesMasterRequest };
var GetSetupV1LocationsIdEmailTemplatesMasterResponse = /** @class */ (function (_super) {
    __extends(GetSetupV1LocationsIdEmailTemplatesMasterResponse, _super);
    function GetSetupV1LocationsIdEmailTemplatesMasterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSetupV1LocationsIdEmailTemplatesMasterResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.MasterEmailTemplateSettingsViewModel)
    ], GetSetupV1LocationsIdEmailTemplatesMasterResponse.prototype, "masterEmailTemplateSettingsViewModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSetupV1LocationsIdEmailTemplatesMasterResponse.prototype, "statusCode", void 0);
    return GetSetupV1LocationsIdEmailTemplatesMasterResponse;
}(SpeakeasyBase));
export { GetSetupV1LocationsIdEmailTemplatesMasterResponse };
