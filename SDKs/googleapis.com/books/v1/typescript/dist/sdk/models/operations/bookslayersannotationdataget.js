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
var BooksLayersAnnotationDataGetPathParams = /** @class */ (function (_super) {
    __extends(BooksLayersAnnotationDataGetPathParams, _super);
    function BooksLayersAnnotationDataGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=annotationDataId" }),
        __metadata("design:type", String)
    ], BooksLayersAnnotationDataGetPathParams.prototype, "annotationDataId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=layerId" }),
        __metadata("design:type", String)
    ], BooksLayersAnnotationDataGetPathParams.prototype, "layerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=volumeId" }),
        __metadata("design:type", String)
    ], BooksLayersAnnotationDataGetPathParams.prototype, "volumeId", void 0);
    return BooksLayersAnnotationDataGetPathParams;
}(SpeakeasyBase));
export { BooksLayersAnnotationDataGetPathParams };
var BooksLayersAnnotationDataGetQueryParams = /** @class */ (function (_super) {
    __extends(BooksLayersAnnotationDataGetQueryParams, _super);
    function BooksLayersAnnotationDataGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BooksLayersAnnotationDataGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BooksLayersAnnotationDataGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allowWebDefinitions" }),
        __metadata("design:type", Boolean)
    ], BooksLayersAnnotationDataGetQueryParams.prototype, "allowWebDefinitions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BooksLayersAnnotationDataGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BooksLayersAnnotationDataGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contentVersion" }),
        __metadata("design:type", String)
    ], BooksLayersAnnotationDataGetQueryParams.prototype, "contentVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BooksLayersAnnotationDataGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=h" }),
        __metadata("design:type", Number)
    ], BooksLayersAnnotationDataGetQueryParams.prototype, "h", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BooksLayersAnnotationDataGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" }),
        __metadata("design:type", String)
    ], BooksLayersAnnotationDataGetQueryParams.prototype, "locale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BooksLayersAnnotationDataGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BooksLayersAnnotationDataGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BooksLayersAnnotationDataGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scale" }),
        __metadata("design:type", Number)
    ], BooksLayersAnnotationDataGetQueryParams.prototype, "scale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source" }),
        __metadata("design:type", String)
    ], BooksLayersAnnotationDataGetQueryParams.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BooksLayersAnnotationDataGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BooksLayersAnnotationDataGetQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=w" }),
        __metadata("design:type", Number)
    ], BooksLayersAnnotationDataGetQueryParams.prototype, "w", void 0);
    return BooksLayersAnnotationDataGetQueryParams;
}(SpeakeasyBase));
export { BooksLayersAnnotationDataGetQueryParams };
var BooksLayersAnnotationDataGetSecurity = /** @class */ (function (_super) {
    __extends(BooksLayersAnnotationDataGetSecurity, _super);
    function BooksLayersAnnotationDataGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BooksLayersAnnotationDataGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BooksLayersAnnotationDataGetSecurity.prototype, "oauth2c", void 0);
    return BooksLayersAnnotationDataGetSecurity;
}(SpeakeasyBase));
export { BooksLayersAnnotationDataGetSecurity };
var BooksLayersAnnotationDataGetRequest = /** @class */ (function (_super) {
    __extends(BooksLayersAnnotationDataGetRequest, _super);
    function BooksLayersAnnotationDataGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksLayersAnnotationDataGetPathParams)
    ], BooksLayersAnnotationDataGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksLayersAnnotationDataGetQueryParams)
    ], BooksLayersAnnotationDataGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksLayersAnnotationDataGetSecurity)
    ], BooksLayersAnnotationDataGetRequest.prototype, "security", void 0);
    return BooksLayersAnnotationDataGetRequest;
}(SpeakeasyBase));
export { BooksLayersAnnotationDataGetRequest };
var BooksLayersAnnotationDataGetResponse = /** @class */ (function (_super) {
    __extends(BooksLayersAnnotationDataGetResponse, _super);
    function BooksLayersAnnotationDataGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BooksLayersAnnotationDataGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DictionaryAnnotationdata)
    ], BooksLayersAnnotationDataGetResponse.prototype, "dictionaryAnnotationdata", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BooksLayersAnnotationDataGetResponse.prototype, "statusCode", void 0);
    return BooksLayersAnnotationDataGetResponse;
}(SpeakeasyBase));
export { BooksLayersAnnotationDataGetResponse };
