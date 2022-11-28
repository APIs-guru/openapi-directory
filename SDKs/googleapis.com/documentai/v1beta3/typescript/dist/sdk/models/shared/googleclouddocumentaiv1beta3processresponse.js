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
import { GoogleCloudDocumentaiV1beta3Document } from "./googleclouddocumentaiv1beta3document";
import { GoogleCloudDocumentaiV1beta3HumanReviewStatus } from "./googleclouddocumentaiv1beta3humanreviewstatus";
// GoogleCloudDocumentaiV1beta3ProcessResponse
/**
 * Response message for the process document method.
**/
var GoogleCloudDocumentaiV1beta3ProcessResponse = /** @class */ (function (_super) {
    __extends(GoogleCloudDocumentaiV1beta3ProcessResponse, _super);
    function GoogleCloudDocumentaiV1beta3ProcessResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=document" }),
        __metadata("design:type", GoogleCloudDocumentaiV1beta3Document)
    ], GoogleCloudDocumentaiV1beta3ProcessResponse.prototype, "document", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=humanReviewOperation" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1beta3ProcessResponse.prototype, "humanReviewOperation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=humanReviewStatus" }),
        __metadata("design:type", GoogleCloudDocumentaiV1beta3HumanReviewStatus)
    ], GoogleCloudDocumentaiV1beta3ProcessResponse.prototype, "humanReviewStatus", void 0);
    return GoogleCloudDocumentaiV1beta3ProcessResponse;
}(SpeakeasyBase));
export { GoogleCloudDocumentaiV1beta3ProcessResponse };
