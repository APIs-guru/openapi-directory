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
var BooksMylibraryAnnotationsInsertQueryParams = /** @class */ (function (_super) {
    __extends(BooksMylibraryAnnotationsInsertQueryParams, _super);
    function BooksMylibraryAnnotationsInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BooksMylibraryAnnotationsInsertQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BooksMylibraryAnnotationsInsertQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BooksMylibraryAnnotationsInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=annotationId" }),
        __metadata("design:type", String)
    ], BooksMylibraryAnnotationsInsertQueryParams.prototype, "annotationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BooksMylibraryAnnotationsInsertQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" }),
        __metadata("design:type", String)
    ], BooksMylibraryAnnotationsInsertQueryParams.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BooksMylibraryAnnotationsInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BooksMylibraryAnnotationsInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BooksMylibraryAnnotationsInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BooksMylibraryAnnotationsInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BooksMylibraryAnnotationsInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=showOnlySummaryInResponse" }),
        __metadata("design:type", Boolean)
    ], BooksMylibraryAnnotationsInsertQueryParams.prototype, "showOnlySummaryInResponse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source" }),
        __metadata("design:type", String)
    ], BooksMylibraryAnnotationsInsertQueryParams.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BooksMylibraryAnnotationsInsertQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BooksMylibraryAnnotationsInsertQueryParams.prototype, "uploadProtocol", void 0);
    return BooksMylibraryAnnotationsInsertQueryParams;
}(SpeakeasyBase));
export { BooksMylibraryAnnotationsInsertQueryParams };
var BooksMylibraryAnnotationsInsertSecurity = /** @class */ (function (_super) {
    __extends(BooksMylibraryAnnotationsInsertSecurity, _super);
    function BooksMylibraryAnnotationsInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BooksMylibraryAnnotationsInsertSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BooksMylibraryAnnotationsInsertSecurity.prototype, "oauth2c", void 0);
    return BooksMylibraryAnnotationsInsertSecurity;
}(SpeakeasyBase));
export { BooksMylibraryAnnotationsInsertSecurity };
var BooksMylibraryAnnotationsInsertRequest = /** @class */ (function (_super) {
    __extends(BooksMylibraryAnnotationsInsertRequest, _super);
    function BooksMylibraryAnnotationsInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksMylibraryAnnotationsInsertQueryParams)
    ], BooksMylibraryAnnotationsInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Annotation)
    ], BooksMylibraryAnnotationsInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksMylibraryAnnotationsInsertSecurity)
    ], BooksMylibraryAnnotationsInsertRequest.prototype, "security", void 0);
    return BooksMylibraryAnnotationsInsertRequest;
}(SpeakeasyBase));
export { BooksMylibraryAnnotationsInsertRequest };
var BooksMylibraryAnnotationsInsertResponse = /** @class */ (function (_super) {
    __extends(BooksMylibraryAnnotationsInsertResponse, _super);
    function BooksMylibraryAnnotationsInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Annotation)
    ], BooksMylibraryAnnotationsInsertResponse.prototype, "annotation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BooksMylibraryAnnotationsInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BooksMylibraryAnnotationsInsertResponse.prototype, "statusCode", void 0);
    return BooksMylibraryAnnotationsInsertResponse;
}(SpeakeasyBase));
export { BooksMylibraryAnnotationsInsertResponse };
