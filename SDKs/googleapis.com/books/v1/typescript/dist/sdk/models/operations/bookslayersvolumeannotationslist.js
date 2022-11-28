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
var BooksLayersVolumeAnnotationsListPathParams = /** @class */ (function (_super) {
    __extends(BooksLayersVolumeAnnotationsListPathParams, _super);
    function BooksLayersVolumeAnnotationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=layerId" }),
        __metadata("design:type", String)
    ], BooksLayersVolumeAnnotationsListPathParams.prototype, "layerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=volumeId" }),
        __metadata("design:type", String)
    ], BooksLayersVolumeAnnotationsListPathParams.prototype, "volumeId", void 0);
    return BooksLayersVolumeAnnotationsListPathParams;
}(SpeakeasyBase));
export { BooksLayersVolumeAnnotationsListPathParams };
var BooksLayersVolumeAnnotationsListQueryParams = /** @class */ (function (_super) {
    __extends(BooksLayersVolumeAnnotationsListQueryParams, _super);
    function BooksLayersVolumeAnnotationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BooksLayersVolumeAnnotationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BooksLayersVolumeAnnotationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BooksLayersVolumeAnnotationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BooksLayersVolumeAnnotationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contentVersion" }),
        __metadata("design:type", String)
    ], BooksLayersVolumeAnnotationsListQueryParams.prototype, "contentVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endOffset" }),
        __metadata("design:type", String)
    ], BooksLayersVolumeAnnotationsListQueryParams.prototype, "endOffset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endPosition" }),
        __metadata("design:type", String)
    ], BooksLayersVolumeAnnotationsListQueryParams.prototype, "endPosition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BooksLayersVolumeAnnotationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BooksLayersVolumeAnnotationsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" }),
        __metadata("design:type", String)
    ], BooksLayersVolumeAnnotationsListQueryParams.prototype, "locale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], BooksLayersVolumeAnnotationsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BooksLayersVolumeAnnotationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], BooksLayersVolumeAnnotationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BooksLayersVolumeAnnotationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BooksLayersVolumeAnnotationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=showDeleted" }),
        __metadata("design:type", Boolean)
    ], BooksLayersVolumeAnnotationsListQueryParams.prototype, "showDeleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source" }),
        __metadata("design:type", String)
    ], BooksLayersVolumeAnnotationsListQueryParams.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startOffset" }),
        __metadata("design:type", String)
    ], BooksLayersVolumeAnnotationsListQueryParams.prototype, "startOffset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startPosition" }),
        __metadata("design:type", String)
    ], BooksLayersVolumeAnnotationsListQueryParams.prototype, "startPosition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedMax" }),
        __metadata("design:type", String)
    ], BooksLayersVolumeAnnotationsListQueryParams.prototype, "updatedMax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedMin" }),
        __metadata("design:type", String)
    ], BooksLayersVolumeAnnotationsListQueryParams.prototype, "updatedMin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BooksLayersVolumeAnnotationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BooksLayersVolumeAnnotationsListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=volumeAnnotationsVersion" }),
        __metadata("design:type", String)
    ], BooksLayersVolumeAnnotationsListQueryParams.prototype, "volumeAnnotationsVersion", void 0);
    return BooksLayersVolumeAnnotationsListQueryParams;
}(SpeakeasyBase));
export { BooksLayersVolumeAnnotationsListQueryParams };
var BooksLayersVolumeAnnotationsListSecurity = /** @class */ (function (_super) {
    __extends(BooksLayersVolumeAnnotationsListSecurity, _super);
    function BooksLayersVolumeAnnotationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BooksLayersVolumeAnnotationsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BooksLayersVolumeAnnotationsListSecurity.prototype, "oauth2c", void 0);
    return BooksLayersVolumeAnnotationsListSecurity;
}(SpeakeasyBase));
export { BooksLayersVolumeAnnotationsListSecurity };
var BooksLayersVolumeAnnotationsListRequest = /** @class */ (function (_super) {
    __extends(BooksLayersVolumeAnnotationsListRequest, _super);
    function BooksLayersVolumeAnnotationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksLayersVolumeAnnotationsListPathParams)
    ], BooksLayersVolumeAnnotationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksLayersVolumeAnnotationsListQueryParams)
    ], BooksLayersVolumeAnnotationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksLayersVolumeAnnotationsListSecurity)
    ], BooksLayersVolumeAnnotationsListRequest.prototype, "security", void 0);
    return BooksLayersVolumeAnnotationsListRequest;
}(SpeakeasyBase));
export { BooksLayersVolumeAnnotationsListRequest };
var BooksLayersVolumeAnnotationsListResponse = /** @class */ (function (_super) {
    __extends(BooksLayersVolumeAnnotationsListResponse, _super);
    function BooksLayersVolumeAnnotationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BooksLayersVolumeAnnotationsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BooksLayersVolumeAnnotationsListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Volumeannotations)
    ], BooksLayersVolumeAnnotationsListResponse.prototype, "volumeannotations", void 0);
    return BooksLayersVolumeAnnotationsListResponse;
}(SpeakeasyBase));
export { BooksLayersVolumeAnnotationsListResponse };
