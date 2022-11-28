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
var PutOfferingsOfferingIdMetadataLevelPathParams = /** @class */ (function (_super) {
    __extends(PutOfferingsOfferingIdMetadataLevelPathParams, _super);
    function PutOfferingsOfferingIdMetadataLevelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=offeringId" }),
        __metadata("design:type", String)
    ], PutOfferingsOfferingIdMetadataLevelPathParams.prototype, "offeringId", void 0);
    return PutOfferingsOfferingIdMetadataLevelPathParams;
}(SpeakeasyBase));
export { PutOfferingsOfferingIdMetadataLevelPathParams };
var PutOfferingsOfferingIdMetadataLevelRequestBody = /** @class */ (function (_super) {
    __extends(PutOfferingsOfferingIdMetadataLevelRequestBody, _super);
    function PutOfferingsOfferingIdMetadataLevelRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=level" }),
        __metadata("design:type", String)
    ], PutOfferingsOfferingIdMetadataLevelRequestBody.prototype, "level", void 0);
    return PutOfferingsOfferingIdMetadataLevelRequestBody;
}(SpeakeasyBase));
export { PutOfferingsOfferingIdMetadataLevelRequestBody };
var PutOfferingsOfferingIdMetadataLevelRequest = /** @class */ (function (_super) {
    __extends(PutOfferingsOfferingIdMetadataLevelRequest, _super);
    function PutOfferingsOfferingIdMetadataLevelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutOfferingsOfferingIdMetadataLevelPathParams)
    ], PutOfferingsOfferingIdMetadataLevelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutOfferingsOfferingIdMetadataLevelRequestBody)
    ], PutOfferingsOfferingIdMetadataLevelRequest.prototype, "request", void 0);
    return PutOfferingsOfferingIdMetadataLevelRequest;
}(SpeakeasyBase));
export { PutOfferingsOfferingIdMetadataLevelRequest };
var PutOfferingsOfferingIdMetadataLevelResponse = /** @class */ (function (_super) {
    __extends(PutOfferingsOfferingIdMetadataLevelResponse, _super);
    function PutOfferingsOfferingIdMetadataLevelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutOfferingsOfferingIdMetadataLevelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], PutOfferingsOfferingIdMetadataLevelResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OfferingMetadataResponse)
    ], PutOfferingsOfferingIdMetadataLevelResponse.prototype, "offeringMetadataResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutOfferingsOfferingIdMetadataLevelResponse.prototype, "statusCode", void 0);
    return PutOfferingsOfferingIdMetadataLevelResponse;
}(SpeakeasyBase));
export { PutOfferingsOfferingIdMetadataLevelResponse };
