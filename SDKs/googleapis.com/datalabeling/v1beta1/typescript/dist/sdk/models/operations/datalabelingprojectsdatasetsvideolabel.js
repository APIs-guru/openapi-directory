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
var DatalabelingProjectsDatasetsVideoLabelPathParams = /** @class */ (function (_super) {
    __extends(DatalabelingProjectsDatasetsVideoLabelPathParams, _super);
    function DatalabelingProjectsDatasetsVideoLabelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsVideoLabelPathParams.prototype, "parent", void 0);
    return DatalabelingProjectsDatasetsVideoLabelPathParams;
}(SpeakeasyBase));
export { DatalabelingProjectsDatasetsVideoLabelPathParams };
var DatalabelingProjectsDatasetsVideoLabelQueryParams = /** @class */ (function (_super) {
    __extends(DatalabelingProjectsDatasetsVideoLabelQueryParams, _super);
    function DatalabelingProjectsDatasetsVideoLabelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsVideoLabelQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsVideoLabelQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsVideoLabelQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsVideoLabelQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsVideoLabelQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsVideoLabelQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsVideoLabelQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatalabelingProjectsDatasetsVideoLabelQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsVideoLabelQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsVideoLabelQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsVideoLabelQueryParams.prototype, "uploadProtocol", void 0);
    return DatalabelingProjectsDatasetsVideoLabelQueryParams;
}(SpeakeasyBase));
export { DatalabelingProjectsDatasetsVideoLabelQueryParams };
var DatalabelingProjectsDatasetsVideoLabelSecurity = /** @class */ (function (_super) {
    __extends(DatalabelingProjectsDatasetsVideoLabelSecurity, _super);
    function DatalabelingProjectsDatasetsVideoLabelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatalabelingProjectsDatasetsVideoLabelSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatalabelingProjectsDatasetsVideoLabelSecurity.prototype, "oauth2c", void 0);
    return DatalabelingProjectsDatasetsVideoLabelSecurity;
}(SpeakeasyBase));
export { DatalabelingProjectsDatasetsVideoLabelSecurity };
var DatalabelingProjectsDatasetsVideoLabelRequest = /** @class */ (function (_super) {
    __extends(DatalabelingProjectsDatasetsVideoLabelRequest, _super);
    function DatalabelingProjectsDatasetsVideoLabelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatalabelingProjectsDatasetsVideoLabelPathParams)
    ], DatalabelingProjectsDatasetsVideoLabelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatalabelingProjectsDatasetsVideoLabelQueryParams)
    ], DatalabelingProjectsDatasetsVideoLabelRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDatalabelingV1beta1LabelVideoRequest)
    ], DatalabelingProjectsDatasetsVideoLabelRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatalabelingProjectsDatasetsVideoLabelSecurity)
    ], DatalabelingProjectsDatasetsVideoLabelRequest.prototype, "security", void 0);
    return DatalabelingProjectsDatasetsVideoLabelRequest;
}(SpeakeasyBase));
export { DatalabelingProjectsDatasetsVideoLabelRequest };
var DatalabelingProjectsDatasetsVideoLabelResponse = /** @class */ (function (_super) {
    __extends(DatalabelingProjectsDatasetsVideoLabelResponse, _super);
    function DatalabelingProjectsDatasetsVideoLabelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatalabelingProjectsDatasetsVideoLabelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], DatalabelingProjectsDatasetsVideoLabelResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatalabelingProjectsDatasetsVideoLabelResponse.prototype, "statusCode", void 0);
    return DatalabelingProjectsDatasetsVideoLabelResponse;
}(SpeakeasyBase));
export { DatalabelingProjectsDatasetsVideoLabelResponse };
