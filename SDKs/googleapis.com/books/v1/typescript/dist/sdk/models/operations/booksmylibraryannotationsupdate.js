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
var BooksMylibraryAnnotationsUpdatePathParams = /** @class */ (function (_super) {
    __extends(BooksMylibraryAnnotationsUpdatePathParams, _super);
    function BooksMylibraryAnnotationsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=annotationId" }),
        __metadata("design:type", String)
    ], BooksMylibraryAnnotationsUpdatePathParams.prototype, "annotationId", void 0);
    return BooksMylibraryAnnotationsUpdatePathParams;
}(SpeakeasyBase));
export { BooksMylibraryAnnotationsUpdatePathParams };
var BooksMylibraryAnnotationsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(BooksMylibraryAnnotationsUpdateQueryParams, _super);
    function BooksMylibraryAnnotationsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BooksMylibraryAnnotationsUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BooksMylibraryAnnotationsUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BooksMylibraryAnnotationsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BooksMylibraryAnnotationsUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BooksMylibraryAnnotationsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BooksMylibraryAnnotationsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BooksMylibraryAnnotationsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BooksMylibraryAnnotationsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BooksMylibraryAnnotationsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source" }),
        __metadata("design:type", String)
    ], BooksMylibraryAnnotationsUpdateQueryParams.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BooksMylibraryAnnotationsUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BooksMylibraryAnnotationsUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return BooksMylibraryAnnotationsUpdateQueryParams;
}(SpeakeasyBase));
export { BooksMylibraryAnnotationsUpdateQueryParams };
var BooksMylibraryAnnotationsUpdateSecurity = /** @class */ (function (_super) {
    __extends(BooksMylibraryAnnotationsUpdateSecurity, _super);
    function BooksMylibraryAnnotationsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BooksMylibraryAnnotationsUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BooksMylibraryAnnotationsUpdateSecurity.prototype, "oauth2c", void 0);
    return BooksMylibraryAnnotationsUpdateSecurity;
}(SpeakeasyBase));
export { BooksMylibraryAnnotationsUpdateSecurity };
var BooksMylibraryAnnotationsUpdateRequest = /** @class */ (function (_super) {
    __extends(BooksMylibraryAnnotationsUpdateRequest, _super);
    function BooksMylibraryAnnotationsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksMylibraryAnnotationsUpdatePathParams)
    ], BooksMylibraryAnnotationsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksMylibraryAnnotationsUpdateQueryParams)
    ], BooksMylibraryAnnotationsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Annotation)
    ], BooksMylibraryAnnotationsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksMylibraryAnnotationsUpdateSecurity)
    ], BooksMylibraryAnnotationsUpdateRequest.prototype, "security", void 0);
    return BooksMylibraryAnnotationsUpdateRequest;
}(SpeakeasyBase));
export { BooksMylibraryAnnotationsUpdateRequest };
var BooksMylibraryAnnotationsUpdateResponse = /** @class */ (function (_super) {
    __extends(BooksMylibraryAnnotationsUpdateResponse, _super);
    function BooksMylibraryAnnotationsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Annotation)
    ], BooksMylibraryAnnotationsUpdateResponse.prototype, "annotation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BooksMylibraryAnnotationsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BooksMylibraryAnnotationsUpdateResponse.prototype, "statusCode", void 0);
    return BooksMylibraryAnnotationsUpdateResponse;
}(SpeakeasyBase));
export { BooksMylibraryAnnotationsUpdateResponse };
