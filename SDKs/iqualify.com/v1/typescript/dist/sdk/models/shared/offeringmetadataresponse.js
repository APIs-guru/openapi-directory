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
import { OfferingMetadata } from "./offeringmetadata";
var OfferingMetadataResponse = /** @class */ (function (_super) {
    __extends(OfferingMetadataResponse, _super);
    function OfferingMetadataResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentId" }),
        __metadata("design:type", String)
    ], OfferingMetadataResponse.prototype, "contentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=coverImageUrl" }),
        __metadata("design:type", String)
    ], OfferingMetadataResponse.prototype, "coverImageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], OfferingMetadataResponse.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], OfferingMetadataResponse.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=earlyCloseOffDate" }),
        __metadata("design:type", Date)
    ], OfferingMetadataResponse.prototype, "earlyCloseOffDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end" }),
        __metadata("design:type", Date)
    ], OfferingMetadataResponse.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enrollmentLimit" }),
        __metadata("design:type", Number)
    ], OfferingMetadataResponse.prototype, "enrollmentLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasEarlyCloseOff" }),
        __metadata("design:type", Boolean)
    ], OfferingMetadataResponse.prototype, "hasEarlyCloseOff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], OfferingMetadataResponse.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identifier" }),
        __metadata("design:type", String)
    ], OfferingMetadataResponse.prototype, "identifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isReadonly" }),
        __metadata("design:type", Boolean)
    ], OfferingMetadataResponse.prototype, "isReadonly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", OfferingMetadata)
    ], OfferingMetadataResponse.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], OfferingMetadataResponse.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=overview" }),
        __metadata("design:type", String)
    ], OfferingMetadataResponse.prototype, "overview", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", Number)
    ], OfferingMetadataResponse.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start" }),
        __metadata("design:type", Date)
    ], OfferingMetadataResponse.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tasksEnabled" }),
        __metadata("design:type", Boolean)
    ], OfferingMetadataResponse.prototype, "tasksEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trailerVideoUrl" }),
        __metadata("design:type", String)
    ], OfferingMetadataResponse.prototype, "trailerVideoUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useRelativeDates" }),
        __metadata("design:type", Boolean)
    ], OfferingMetadataResponse.prototype, "useRelativeDates", void 0);
    return OfferingMetadataResponse;
}(SpeakeasyBase));
export { OfferingMetadataResponse };
