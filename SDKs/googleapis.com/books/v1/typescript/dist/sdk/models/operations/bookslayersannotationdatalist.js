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
var BooksLayersAnnotationDataListPathParams = /** @class */ (function (_super) {
    __extends(BooksLayersAnnotationDataListPathParams, _super);
    function BooksLayersAnnotationDataListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=layerId" }),
        __metadata("design:type", String)
    ], BooksLayersAnnotationDataListPathParams.prototype, "layerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=volumeId" }),
        __metadata("design:type", String)
    ], BooksLayersAnnotationDataListPathParams.prototype, "volumeId", void 0);
    return BooksLayersAnnotationDataListPathParams;
}(SpeakeasyBase));
export { BooksLayersAnnotationDataListPathParams };
var BooksLayersAnnotationDataListQueryParams = /** @class */ (function (_super) {
    __extends(BooksLayersAnnotationDataListQueryParams, _super);
    function BooksLayersAnnotationDataListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BooksLayersAnnotationDataListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BooksLayersAnnotationDataListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BooksLayersAnnotationDataListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=annotationDataId" }),
        __metadata("design:type", Array)
    ], BooksLayersAnnotationDataListQueryParams.prototype, "annotationDataId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BooksLayersAnnotationDataListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contentVersion" }),
        __metadata("design:type", String)
    ], BooksLayersAnnotationDataListQueryParams.prototype, "contentVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BooksLayersAnnotationDataListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=h" }),
        __metadata("design:type", Number)
    ], BooksLayersAnnotationDataListQueryParams.prototype, "h", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BooksLayersAnnotationDataListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" }),
        __metadata("design:type", String)
    ], BooksLayersAnnotationDataListQueryParams.prototype, "locale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], BooksLayersAnnotationDataListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BooksLayersAnnotationDataListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], BooksLayersAnnotationDataListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BooksLayersAnnotationDataListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BooksLayersAnnotationDataListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scale" }),
        __metadata("design:type", Number)
    ], BooksLayersAnnotationDataListQueryParams.prototype, "scale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source" }),
        __metadata("design:type", String)
    ], BooksLayersAnnotationDataListQueryParams.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedMax" }),
        __metadata("design:type", String)
    ], BooksLayersAnnotationDataListQueryParams.prototype, "updatedMax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedMin" }),
        __metadata("design:type", String)
    ], BooksLayersAnnotationDataListQueryParams.prototype, "updatedMin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BooksLayersAnnotationDataListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BooksLayersAnnotationDataListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=w" }),
        __metadata("design:type", Number)
    ], BooksLayersAnnotationDataListQueryParams.prototype, "w", void 0);
    return BooksLayersAnnotationDataListQueryParams;
}(SpeakeasyBase));
export { BooksLayersAnnotationDataListQueryParams };
var BooksLayersAnnotationDataListSecurity = /** @class */ (function (_super) {
    __extends(BooksLayersAnnotationDataListSecurity, _super);
    function BooksLayersAnnotationDataListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BooksLayersAnnotationDataListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BooksLayersAnnotationDataListSecurity.prototype, "oauth2c", void 0);
    return BooksLayersAnnotationDataListSecurity;
}(SpeakeasyBase));
export { BooksLayersAnnotationDataListSecurity };
var BooksLayersAnnotationDataListRequest = /** @class */ (function (_super) {
    __extends(BooksLayersAnnotationDataListRequest, _super);
    function BooksLayersAnnotationDataListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksLayersAnnotationDataListPathParams)
    ], BooksLayersAnnotationDataListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksLayersAnnotationDataListQueryParams)
    ], BooksLayersAnnotationDataListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksLayersAnnotationDataListSecurity)
    ], BooksLayersAnnotationDataListRequest.prototype, "security", void 0);
    return BooksLayersAnnotationDataListRequest;
}(SpeakeasyBase));
export { BooksLayersAnnotationDataListRequest };
var BooksLayersAnnotationDataListResponse = /** @class */ (function (_super) {
    __extends(BooksLayersAnnotationDataListResponse, _super);
    function BooksLayersAnnotationDataListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Annotationsdata)
    ], BooksLayersAnnotationDataListResponse.prototype, "annotationsdata", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BooksLayersAnnotationDataListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BooksLayersAnnotationDataListResponse.prototype, "statusCode", void 0);
    return BooksLayersAnnotationDataListResponse;
}(SpeakeasyBase));
export { BooksLayersAnnotationDataListResponse };
