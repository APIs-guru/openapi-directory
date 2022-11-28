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
var PostSetupV1LocationsIdEmailTemplatesMasterPathParams = /** @class */ (function (_super) {
    __extends(PostSetupV1LocationsIdEmailTemplatesMasterPathParams, _super);
    function PostSetupV1LocationsIdEmailTemplatesMasterPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PostSetupV1LocationsIdEmailTemplatesMasterPathParams.prototype, "id", void 0);
    return PostSetupV1LocationsIdEmailTemplatesMasterPathParams;
}(SpeakeasyBase));
export { PostSetupV1LocationsIdEmailTemplatesMasterPathParams };
var PostSetupV1LocationsIdEmailTemplatesMasterRequests = /** @class */ (function (_super) {
    __extends(PostSetupV1LocationsIdEmailTemplatesMasterRequests, _super);
    function PostSetupV1LocationsIdEmailTemplatesMasterRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.MasterTemplateSettingsInputModel)
    ], PostSetupV1LocationsIdEmailTemplatesMasterRequests.prototype, "masterTemplateSettingsInputModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.MasterTemplateSettingsInputModel)
    ], PostSetupV1LocationsIdEmailTemplatesMasterRequests.prototype, "masterTemplateSettingsInputModel1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.MasterTemplateSettingsInputModel)
    ], PostSetupV1LocationsIdEmailTemplatesMasterRequests.prototype, "masterTemplateSettingsInputModel2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.MasterTemplateSettingsInputModel)
    ], PostSetupV1LocationsIdEmailTemplatesMasterRequests.prototype, "masterTemplateSettingsInputModel3", void 0);
    return PostSetupV1LocationsIdEmailTemplatesMasterRequests;
}(SpeakeasyBase));
export { PostSetupV1LocationsIdEmailTemplatesMasterRequests };
var PostSetupV1LocationsIdEmailTemplatesMasterRequest = /** @class */ (function (_super) {
    __extends(PostSetupV1LocationsIdEmailTemplatesMasterRequest, _super);
    function PostSetupV1LocationsIdEmailTemplatesMasterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSetupV1LocationsIdEmailTemplatesMasterPathParams)
    ], PostSetupV1LocationsIdEmailTemplatesMasterRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSetupV1LocationsIdEmailTemplatesMasterRequests)
    ], PostSetupV1LocationsIdEmailTemplatesMasterRequest.prototype, "request", void 0);
    return PostSetupV1LocationsIdEmailTemplatesMasterRequest;
}(SpeakeasyBase));
export { PostSetupV1LocationsIdEmailTemplatesMasterRequest };
var PostSetupV1LocationsIdEmailTemplatesMasterResponse = /** @class */ (function (_super) {
    __extends(PostSetupV1LocationsIdEmailTemplatesMasterResponse, _super);
    function PostSetupV1LocationsIdEmailTemplatesMasterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostSetupV1LocationsIdEmailTemplatesMasterResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.MasterEmailTemplateSettingsViewModel)
    ], PostSetupV1LocationsIdEmailTemplatesMasterResponse.prototype, "masterEmailTemplateSettingsViewModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostSetupV1LocationsIdEmailTemplatesMasterResponse.prototype, "statusCode", void 0);
    return PostSetupV1LocationsIdEmailTemplatesMasterResponse;
}(SpeakeasyBase));
export { PostSetupV1LocationsIdEmailTemplatesMasterResponse };
