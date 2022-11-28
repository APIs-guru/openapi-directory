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
var GetABatchOfConsumerTransactionClassificationResultsPathParams = /** @class */ (function (_super) {
    __extends(GetABatchOfConsumerTransactionClassificationResultsPathParams, _super);
    function GetABatchOfConsumerTransactionClassificationResultsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetABatchOfConsumerTransactionClassificationResultsPathParams.prototype, "id", void 0);
    return GetABatchOfConsumerTransactionClassificationResultsPathParams;
}(SpeakeasyBase));
export { GetABatchOfConsumerTransactionClassificationResultsPathParams };
var GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsContact = /** @class */ (function (_super) {
    __extends(GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsContact, _super);
    function GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsContact() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsContact.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone" }),
        __metadata("design:type", String)
    ], GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsContact.prototype, "phone", void 0);
    return GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsContact;
}(SpeakeasyBase));
export { GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsContact };
var GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsLocation = /** @class */ (function (_super) {
    __extends(GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsLocation, _super);
    function GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsLocation.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsLocation.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsLocation.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lat" }),
        __metadata("design:type", Number)
    ], GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsLocation.prototype, "lat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lon" }),
        __metadata("design:type", Number)
    ], GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsLocation.prototype, "lon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postal_code" }),
        __metadata("design:type", String)
    ], GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsLocation.prototype, "postalCode", void 0);
    return GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsLocation;
}(SpeakeasyBase));
export { GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsLocation };
var GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsRating = /** @class */ (function (_super) {
    __extends(GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsRating, _super);
    function GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsRating() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reviews" }),
        __metadata("design:type", Number)
    ], GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsRating.prototype, "reviews", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", Number)
    ], GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsRating.prototype, "value", void 0);
    return GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsRating;
}(SpeakeasyBase));
export { GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsRating };
var GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResults = /** @class */ (function (_super) {
    __extends(GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResults, _super);
    function GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResults() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contact" }),
        __metadata("design:type", GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsContact)
    ], GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResults.prototype, "contact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Array)
    ], GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResults.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsLocation)
    ], GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResults.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logo" }),
        __metadata("design:type", String)
    ], GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResults.prototype, "logo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merchant" }),
        __metadata("design:type", String)
    ], GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResults.prototype, "merchant", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=person" }),
        __metadata("design:type", String)
    ], GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResults.prototype, "person", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rating" }),
        __metadata("design:type", GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResultsRating)
    ], GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResults.prototype, "rating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transaction_id" }),
        __metadata("design:type", String)
    ], GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResults.prototype, "transactionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=website" }),
        __metadata("design:type", String)
    ], GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResults.prototype, "website", void 0);
    return GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResults;
}(SpeakeasyBase));
export { GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResults };
var GetABatchOfConsumerTransactionClassificationResults200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetABatchOfConsumerTransactionClassificationResults200ApplicationJson, _super);
    function GetABatchOfConsumerTransactionClassificationResults200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetABatchOfConsumerTransactionClassificationResults200ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], GetABatchOfConsumerTransactionClassificationResults200ApplicationJson.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: GetABatchOfConsumerTransactionClassificationResults200ApplicationJsonResults }),
        __metadata("design:type", Array)
    ], GetABatchOfConsumerTransactionClassificationResults200ApplicationJson.prototype, "results", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetABatchOfConsumerTransactionClassificationResults200ApplicationJson.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", String)
    ], GetABatchOfConsumerTransactionClassificationResults200ApplicationJson.prototype, "updatedAt", void 0);
    return GetABatchOfConsumerTransactionClassificationResults200ApplicationJson;
}(SpeakeasyBase));
export { GetABatchOfConsumerTransactionClassificationResults200ApplicationJson };
var GetABatchOfConsumerTransactionClassificationResultsRequest = /** @class */ (function (_super) {
    __extends(GetABatchOfConsumerTransactionClassificationResultsRequest, _super);
    function GetABatchOfConsumerTransactionClassificationResultsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetABatchOfConsumerTransactionClassificationResultsPathParams)
    ], GetABatchOfConsumerTransactionClassificationResultsRequest.prototype, "pathParams", void 0);
    return GetABatchOfConsumerTransactionClassificationResultsRequest;
}(SpeakeasyBase));
export { GetABatchOfConsumerTransactionClassificationResultsRequest };
var GetABatchOfConsumerTransactionClassificationResultsResponse = /** @class */ (function (_super) {
    __extends(GetABatchOfConsumerTransactionClassificationResultsResponse, _super);
    function GetABatchOfConsumerTransactionClassificationResultsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetABatchOfConsumerTransactionClassificationResultsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetABatchOfConsumerTransactionClassificationResultsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetABatchOfConsumerTransactionClassificationResults200ApplicationJson)
    ], GetABatchOfConsumerTransactionClassificationResultsResponse.prototype, "getABatchOfConsumerTransactionClassificationResults200ApplicationJsonObject", void 0);
    return GetABatchOfConsumerTransactionClassificationResultsResponse;
}(SpeakeasyBase));
export { GetABatchOfConsumerTransactionClassificationResultsResponse };
