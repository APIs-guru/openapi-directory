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
var Domain = /** @class */ (function (_super) {
    __extends(Domain, _super);
    function Domain() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=correctCname" }),
        __metadata("design:type", String)
    ], Domain.prototype, "correctCname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], Domain.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], Domain.prototype, "domain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Domain.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isResolving" }),
        __metadata("design:type", Boolean)
    ], Domain.prototype, "isResolving", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isSslEnabled" }),
        __metadata("design:type", Boolean)
    ], Domain.prototype, "isSslEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isSslOnly" }),
        __metadata("design:type", Boolean)
    ], Domain.prototype, "isSslOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isUsedForBlogPost" }),
        __metadata("design:type", Boolean)
    ], Domain.prototype, "isUsedForBlogPost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isUsedForEmail" }),
        __metadata("design:type", Boolean)
    ], Domain.prototype, "isUsedForEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isUsedForKnowledge" }),
        __metadata("design:type", Boolean)
    ], Domain.prototype, "isUsedForKnowledge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isUsedForLandingPage" }),
        __metadata("design:type", Boolean)
    ], Domain.prototype, "isUsedForLandingPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isUsedForSitePage" }),
        __metadata("design:type", Boolean)
    ], Domain.prototype, "isUsedForSitePage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=manuallyMarkedAsResolving" }),
        __metadata("design:type", Boolean)
    ], Domain.prototype, "manuallyMarkedAsResolving", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryBlogPost" }),
        __metadata("design:type", Boolean)
    ], Domain.prototype, "primaryBlogPost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryEmail" }),
        __metadata("design:type", Boolean)
    ], Domain.prototype, "primaryEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryKnowledge" }),
        __metadata("design:type", Boolean)
    ], Domain.prototype, "primaryKnowledge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryLandingPage" }),
        __metadata("design:type", Boolean)
    ], Domain.prototype, "primaryLandingPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primarySitePage" }),
        __metadata("design:type", Boolean)
    ], Domain.prototype, "primarySitePage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secondaryToDomain" }),
        __metadata("design:type", String)
    ], Domain.prototype, "secondaryToDomain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated" }),
        __metadata("design:type", Date)
    ], Domain.prototype, "updated", void 0);
    return Domain;
}(SpeakeasyBase));
export { Domain };
