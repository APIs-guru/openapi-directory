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
import { GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor } from "./googlefactcheckingfactchecktoolsv1alpha1claimauthor";
import { GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating } from "./googlefactcheckingfactchecktoolsv1alpha1claimrating";
// GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup
/**
 * Fields for an individual `ClaimReview` element. Except for sub-messages that group fields together, each of these fields correspond those in https://schema.org/ClaimReview. We list the precise mapping for each field.
**/
var GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup = /** @class */ (function (_super) {
    __extends(GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup, _super);
    function GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=claimAppearances" }),
        __metadata("design:type", Array)
    ], GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup.prototype, "claimAppearances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=claimAuthor" }),
        __metadata("design:type", GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor)
    ], GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup.prototype, "claimAuthor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=claimDate" }),
        __metadata("design:type", String)
    ], GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup.prototype, "claimDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=claimFirstAppearance" }),
        __metadata("design:type", String)
    ], GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup.prototype, "claimFirstAppearance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=claimLocation" }),
        __metadata("design:type", String)
    ], GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup.prototype, "claimLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=claimReviewed" }),
        __metadata("design:type", String)
    ], GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup.prototype, "claimReviewed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rating" }),
        __metadata("design:type", GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating)
    ], GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup.prototype, "rating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup.prototype, "url", void 0);
    return GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup;
}(SpeakeasyBase));
export { GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup };
