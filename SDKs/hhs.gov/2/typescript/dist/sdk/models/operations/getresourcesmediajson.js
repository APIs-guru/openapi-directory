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
var GetResourcesMediaJsonQueryParams = /** @class */ (function (_super) {
    __extends(GetResourcesMediaJsonQueryParams, _super);
    function GetResourcesMediaJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=collectionId" }),
        __metadata("design:type", Number)
    ], GetResourcesMediaJsonQueryParams.prototype, "collectionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=contentAuthoredBeforeDate" }),
        __metadata("design:type", Date)
    ], GetResourcesMediaJsonQueryParams.prototype, "contentAuthoredBeforeDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=contentAuthoredInRange" }),
        __metadata("design:type", String)
    ], GetResourcesMediaJsonQueryParams.prototype, "contentAuthoredInRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=contentAuthoredSinceDate" }),
        __metadata("design:type", Date)
    ], GetResourcesMediaJsonQueryParams.prototype, "contentAuthoredSinceDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=contentPublishedBeforeDate" }),
        __metadata("design:type", Date)
    ], GetResourcesMediaJsonQueryParams.prototype, "contentPublishedBeforeDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=contentPublishedInRange" }),
        __metadata("design:type", String)
    ], GetResourcesMediaJsonQueryParams.prototype, "contentPublishedInRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=contentPublishedSinceDate" }),
        __metadata("design:type", Date)
    ], GetResourcesMediaJsonQueryParams.prototype, "contentPublishedSinceDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=contentReviewedBeforeDate" }),
        __metadata("design:type", Date)
    ], GetResourcesMediaJsonQueryParams.prototype, "contentReviewedBeforeDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=contentReviewedInRange" }),
        __metadata("design:type", String)
    ], GetResourcesMediaJsonQueryParams.prototype, "contentReviewedInRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=contentReviewedSinceDate" }),
        __metadata("design:type", Date)
    ], GetResourcesMediaJsonQueryParams.prototype, "contentReviewedSinceDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=contentUpdatedBeforeDate" }),
        __metadata("design:type", Date)
    ], GetResourcesMediaJsonQueryParams.prototype, "contentUpdatedBeforeDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=contentUpdatedInRange" }),
        __metadata("design:type", String)
    ], GetResourcesMediaJsonQueryParams.prototype, "contentUpdatedInRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=contentUpdatedSinceDate" }),
        __metadata("design:type", Date)
    ], GetResourcesMediaJsonQueryParams.prototype, "contentUpdatedSinceDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=createdBy" }),
        __metadata("design:type", String)
    ], GetResourcesMediaJsonQueryParams.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=customThumbnailUrl" }),
        __metadata("design:type", String)
    ], GetResourcesMediaJsonQueryParams.prototype, "customThumbnailUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=customThumbnailUrlContains" }),
        __metadata("design:type", String)
    ], GetResourcesMediaJsonQueryParams.prototype, "customThumbnailUrlContains", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=dateContentAuthored" }),
        __metadata("design:type", Date)
    ], GetResourcesMediaJsonQueryParams.prototype, "dateContentAuthored", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=dateContentPublished" }),
        __metadata("design:type", Date)
    ], GetResourcesMediaJsonQueryParams.prototype, "dateContentPublished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=dateContentReviewed" }),
        __metadata("design:type", Date)
    ], GetResourcesMediaJsonQueryParams.prototype, "dateContentReviewed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=dateContentUpdated" }),
        __metadata("design:type", Date)
    ], GetResourcesMediaJsonQueryParams.prototype, "dateContentUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=dateSyndicationCaptured" }),
        __metadata("design:type", Date)
    ], GetResourcesMediaJsonQueryParams.prototype, "dateSyndicationCaptured", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=dateSyndicationUpdated" }),
        __metadata("design:type", Date)
    ], GetResourcesMediaJsonQueryParams.prototype, "dateSyndicationUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=descriptionContains" }),
        __metadata("design:type", String)
    ], GetResourcesMediaJsonQueryParams.prototype, "descriptionContains", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=hash" }),
        __metadata("design:type", String)
    ], GetResourcesMediaJsonQueryParams.prototype, "hash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=hashContains" }),
        __metadata("design:type", String)
    ], GetResourcesMediaJsonQueryParams.prototype, "hashContains", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=languageId" }),
        __metadata("design:type", Number)
    ], GetResourcesMediaJsonQueryParams.prototype, "languageId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=languageIsoCode" }),
        __metadata("design:type", String)
    ], GetResourcesMediaJsonQueryParams.prototype, "languageIsoCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=languageName" }),
        __metadata("design:type", String)
    ], GetResourcesMediaJsonQueryParams.prototype, "languageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=max" }),
        __metadata("design:type", Number)
    ], GetResourcesMediaJsonQueryParams.prototype, "max", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=mediaTypes" }),
        __metadata("design:type", String)
    ], GetResourcesMediaJsonQueryParams.prototype, "mediaTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=name" }),
        __metadata("design:type", String)
    ], GetResourcesMediaJsonQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=nameContains" }),
        __metadata("design:type", String)
    ], GetResourcesMediaJsonQueryParams.prototype, "nameContains", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=offset" }),
        __metadata("design:type", Number)
    ], GetResourcesMediaJsonQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=order" }),
        __metadata("design:type", String)
    ], GetResourcesMediaJsonQueryParams.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=restrictToSet" }),
        __metadata("design:type", String)
    ], GetResourcesMediaJsonQueryParams.prototype, "restrictToSet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=sort" }),
        __metadata("design:type", String)
    ], GetResourcesMediaJsonQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=sourceAcronym" }),
        __metadata("design:type", String)
    ], GetResourcesMediaJsonQueryParams.prototype, "sourceAcronym", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=sourceAcronymContains" }),
        __metadata("design:type", String)
    ], GetResourcesMediaJsonQueryParams.prototype, "sourceAcronymContains", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=sourceId" }),
        __metadata("design:type", Number)
    ], GetResourcesMediaJsonQueryParams.prototype, "sourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=sourceName" }),
        __metadata("design:type", String)
    ], GetResourcesMediaJsonQueryParams.prototype, "sourceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=sourceNameContains" }),
        __metadata("design:type", String)
    ], GetResourcesMediaJsonQueryParams.prototype, "sourceNameContains", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=sourceUrl" }),
        __metadata("design:type", String)
    ], GetResourcesMediaJsonQueryParams.prototype, "sourceUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=sourceUrlContains" }),
        __metadata("design:type", String)
    ], GetResourcesMediaJsonQueryParams.prototype, "sourceUrlContains", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=syndicationCapturedBeforeDate" }),
        __metadata("design:type", Date)
    ], GetResourcesMediaJsonQueryParams.prototype, "syndicationCapturedBeforeDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=syndicationCapturedInRange" }),
        __metadata("design:type", String)
    ], GetResourcesMediaJsonQueryParams.prototype, "syndicationCapturedInRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=syndicationCapturedSinceDate" }),
        __metadata("design:type", Date)
    ], GetResourcesMediaJsonQueryParams.prototype, "syndicationCapturedSinceDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=syndicationUpdatedBeforeDate" }),
        __metadata("design:type", Date)
    ], GetResourcesMediaJsonQueryParams.prototype, "syndicationUpdatedBeforeDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=syndicationUpdatedInRange" }),
        __metadata("design:type", String)
    ], GetResourcesMediaJsonQueryParams.prototype, "syndicationUpdatedInRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=syndicationUpdatedSinceDate" }),
        __metadata("design:type", Date)
    ], GetResourcesMediaJsonQueryParams.prototype, "syndicationUpdatedSinceDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=syndicationVisibleBeforeDate" }),
        __metadata("design:type", Date)
    ], GetResourcesMediaJsonQueryParams.prototype, "syndicationVisibleBeforeDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=syndicationVisibleInRange" }),
        __metadata("design:type", Date)
    ], GetResourcesMediaJsonQueryParams.prototype, "syndicationVisibleInRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=syndicationVisibleSinceDate" }),
        __metadata("design:type", Date)
    ], GetResourcesMediaJsonQueryParams.prototype, "syndicationVisibleSinceDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=tagIds" }),
        __metadata("design:type", String)
    ], GetResourcesMediaJsonQueryParams.prototype, "tagIds", void 0);
    return GetResourcesMediaJsonQueryParams;
}(SpeakeasyBase));
export { GetResourcesMediaJsonQueryParams };
var GetResourcesMediaJsonRequest = /** @class */ (function (_super) {
    __extends(GetResourcesMediaJsonRequest, _super);
    function GetResourcesMediaJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetResourcesMediaJsonQueryParams)
    ], GetResourcesMediaJsonRequest.prototype, "queryParams", void 0);
    return GetResourcesMediaJsonRequest;
}(SpeakeasyBase));
export { GetResourcesMediaJsonRequest };
var GetResourcesMediaJsonResponse = /** @class */ (function (_super) {
    __extends(GetResourcesMediaJsonResponse, _super);
    function GetResourcesMediaJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetResourcesMediaJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.MediaItemWrapped }),
        __metadata("design:type", Array)
    ], GetResourcesMediaJsonResponse.prototype, "mediaItemWrappeds", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetResourcesMediaJsonResponse.prototype, "statusCode", void 0);
    return GetResourcesMediaJsonResponse;
}(SpeakeasyBase));
export { GetResourcesMediaJsonResponse };
