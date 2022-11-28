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
var GetApiV1PublicationsPublicationIdDocumentsDocumentIdPathParams = /** @class */ (function (_super) {
    __extends(GetApiV1PublicationsPublicationIdDocumentsDocumentIdPathParams, _super);
    function GetApiV1PublicationsPublicationIdDocumentsDocumentIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=documentId" }),
        __metadata("design:type", Number)
    ], GetApiV1PublicationsPublicationIdDocumentsDocumentIdPathParams.prototype, "documentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=publicationId" }),
        __metadata("design:type", Number)
    ], GetApiV1PublicationsPublicationIdDocumentsDocumentIdPathParams.prototype, "publicationId", void 0);
    return GetApiV1PublicationsPublicationIdDocumentsDocumentIdPathParams;
}(SpeakeasyBase));
export { GetApiV1PublicationsPublicationIdDocumentsDocumentIdPathParams };
var GetApiV1PublicationsPublicationIdDocumentsDocumentIdRequest = /** @class */ (function (_super) {
    __extends(GetApiV1PublicationsPublicationIdDocumentsDocumentIdRequest, _super);
    function GetApiV1PublicationsPublicationIdDocumentsDocumentIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiV1PublicationsPublicationIdDocumentsDocumentIdPathParams)
    ], GetApiV1PublicationsPublicationIdDocumentsDocumentIdRequest.prototype, "pathParams", void 0);
    return GetApiV1PublicationsPublicationIdDocumentsDocumentIdRequest;
}(SpeakeasyBase));
export { GetApiV1PublicationsPublicationIdDocumentsDocumentIdRequest };
var GetApiV1PublicationsPublicationIdDocumentsDocumentIdResponse = /** @class */ (function (_super) {
    __extends(GetApiV1PublicationsPublicationIdDocumentsDocumentIdResponse, _super);
    function GetApiV1PublicationsPublicationIdDocumentsDocumentIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetApiV1PublicationsPublicationIdDocumentsDocumentIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetApiV1PublicationsPublicationIdDocumentsDocumentIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetApiV1PublicationsPublicationIdDocumentsDocumentIdResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PublicationDocument)
    ], GetApiV1PublicationsPublicationIdDocumentsDocumentIdResponse.prototype, "publicationDocument", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetApiV1PublicationsPublicationIdDocumentsDocumentIdResponse.prototype, "statusCode", void 0);
    return GetApiV1PublicationsPublicationIdDocumentsDocumentIdResponse;
}(SpeakeasyBase));
export { GetApiV1PublicationsPublicationIdDocumentsDocumentIdResponse };
