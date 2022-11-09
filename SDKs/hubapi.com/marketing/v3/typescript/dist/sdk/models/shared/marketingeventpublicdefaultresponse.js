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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var MarketingEventPublicDefaultResponse = /** @class */ (function (_super) {
    __extends(MarketingEventPublicDefaultResponse, _super);
    function MarketingEventPublicDefaultResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], MarketingEventPublicDefaultResponse.prototype, "createdAt", void 0);
    __decorate([
        Metadata({ data: "json, name=customProperties", elemType: shared.PropertyValue }),
        __metadata("design:type", Array)
    ], MarketingEventPublicDefaultResponse.prototype, "customProperties", void 0);
    __decorate([
        Metadata({ data: "json, name=endDateTime" }),
        __metadata("design:type", Date)
    ], MarketingEventPublicDefaultResponse.prototype, "endDateTime", void 0);
    __decorate([
        Metadata({ data: "json, name=eventCancelled" }),
        __metadata("design:type", Boolean)
    ], MarketingEventPublicDefaultResponse.prototype, "eventCancelled", void 0);
    __decorate([
        Metadata({ data: "json, name=eventDescription" }),
        __metadata("design:type", String)
    ], MarketingEventPublicDefaultResponse.prototype, "eventDescription", void 0);
    __decorate([
        Metadata({ data: "json, name=eventName" }),
        __metadata("design:type", String)
    ], MarketingEventPublicDefaultResponse.prototype, "eventName", void 0);
    __decorate([
        Metadata({ data: "json, name=eventOrganizer" }),
        __metadata("design:type", String)
    ], MarketingEventPublicDefaultResponse.prototype, "eventOrganizer", void 0);
    __decorate([
        Metadata({ data: "json, name=eventType" }),
        __metadata("design:type", String)
    ], MarketingEventPublicDefaultResponse.prototype, "eventType", void 0);
    __decorate([
        Metadata({ data: "json, name=eventUrl" }),
        __metadata("design:type", String)
    ], MarketingEventPublicDefaultResponse.prototype, "eventUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], MarketingEventPublicDefaultResponse.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=startDateTime" }),
        __metadata("design:type", Date)
    ], MarketingEventPublicDefaultResponse.prototype, "startDateTime", void 0);
    __decorate([
        Metadata({ data: "json, name=updatedAt" }),
        __metadata("design:type", Date)
    ], MarketingEventPublicDefaultResponse.prototype, "updatedAt", void 0);
    return MarketingEventPublicDefaultResponse;
}(SpeakeasyBase));
export { MarketingEventPublicDefaultResponse };
