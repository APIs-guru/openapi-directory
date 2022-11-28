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
var DatalabelingProjectsDatasetsImageLabelPathParams = /** @class */ (function (_super) {
    __extends(DatalabelingProjectsDatasetsImageLabelPathParams, _super);
    function DatalabelingProjectsDatasetsImageLabelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsImageLabelPathParams.prototype, "parent", void 0);
    return DatalabelingProjectsDatasetsImageLabelPathParams;
}(SpeakeasyBase));
export { DatalabelingProjectsDatasetsImageLabelPathParams };
var DatalabelingProjectsDatasetsImageLabelQueryParams = /** @class */ (function (_super) {
    __extends(DatalabelingProjectsDatasetsImageLabelQueryParams, _super);
    function DatalabelingProjectsDatasetsImageLabelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsImageLabelQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsImageLabelQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsImageLabelQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsImageLabelQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsImageLabelQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsImageLabelQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsImageLabelQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatalabelingProjectsDatasetsImageLabelQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsImageLabelQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsImageLabelQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsImageLabelQueryParams.prototype, "uploadProtocol", void 0);
    return DatalabelingProjectsDatasetsImageLabelQueryParams;
}(SpeakeasyBase));
export { DatalabelingProjectsDatasetsImageLabelQueryParams };
var DatalabelingProjectsDatasetsImageLabelSecurity = /** @class */ (function (_super) {
    __extends(DatalabelingProjectsDatasetsImageLabelSecurity, _super);
    function DatalabelingProjectsDatasetsImageLabelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatalabelingProjectsDatasetsImageLabelSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatalabelingProjectsDatasetsImageLabelSecurity.prototype, "oauth2c", void 0);
    return DatalabelingProjectsDatasetsImageLabelSecurity;
}(SpeakeasyBase));
export { DatalabelingProjectsDatasetsImageLabelSecurity };
var DatalabelingProjectsDatasetsImageLabelRequest = /** @class */ (function (_super) {
    __extends(DatalabelingProjectsDatasetsImageLabelRequest, _super);
    function DatalabelingProjectsDatasetsImageLabelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatalabelingProjectsDatasetsImageLabelPathParams)
    ], DatalabelingProjectsDatasetsImageLabelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatalabelingProjectsDatasetsImageLabelQueryParams)
    ], DatalabelingProjectsDatasetsImageLabelRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDatalabelingV1beta1LabelImageRequest)
    ], DatalabelingProjectsDatasetsImageLabelRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatalabelingProjectsDatasetsImageLabelSecurity)
    ], DatalabelingProjectsDatasetsImageLabelRequest.prototype, "security", void 0);
    return DatalabelingProjectsDatasetsImageLabelRequest;
}(SpeakeasyBase));
export { DatalabelingProjectsDatasetsImageLabelRequest };
var DatalabelingProjectsDatasetsImageLabelResponse = /** @class */ (function (_super) {
    __extends(DatalabelingProjectsDatasetsImageLabelResponse, _super);
    function DatalabelingProjectsDatasetsImageLabelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsImageLabelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], DatalabelingProjectsDatasetsImageLabelResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatalabelingProjectsDatasetsImageLabelResponse.prototype, "statusCode", void 0);
    return DatalabelingProjectsDatasetsImageLabelResponse;
}(SpeakeasyBase));
export { DatalabelingProjectsDatasetsImageLabelResponse };
