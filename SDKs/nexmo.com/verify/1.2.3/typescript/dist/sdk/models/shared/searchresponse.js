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
export var SearchResponseChecksStatusEnum;
(function (SearchResponseChecksStatusEnum) {
    SearchResponseChecksStatusEnum["Valid"] = "VALID";
    SearchResponseChecksStatusEnum["Invalid"] = "INVALID";
})(SearchResponseChecksStatusEnum || (SearchResponseChecksStatusEnum = {}));
var SearchResponseChecks = /** @class */ (function (_super) {
    __extends(SearchResponseChecks, _super);
    function SearchResponseChecks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], SearchResponseChecks.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_received" }),
        __metadata("design:type", String)
    ], SearchResponseChecks.prototype, "dateReceived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip_address" }),
        __metadata("design:type", String)
    ], SearchResponseChecks.prototype, "ipAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], SearchResponseChecks.prototype, "status", void 0);
    return SearchResponseChecks;
}(SpeakeasyBase));
export { SearchResponseChecks };
export var SearchResponseEventsTypeEnum;
(function (SearchResponseEventsTypeEnum) {
    SearchResponseEventsTypeEnum["Tts"] = "tts";
    SearchResponseEventsTypeEnum["Sms"] = "sms";
})(SearchResponseEventsTypeEnum || (SearchResponseEventsTypeEnum = {}));
var SearchResponseEvents = /** @class */ (function (_super) {
    __extends(SearchResponseEvents, _super);
    function SearchResponseEvents() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], SearchResponseEvents.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], SearchResponseEvents.prototype, "type", void 0);
    return SearchResponseEvents;
}(SpeakeasyBase));
export { SearchResponseEvents };
export var SearchResponseStatusEnum;
(function (SearchResponseStatusEnum) {
    SearchResponseStatusEnum["InProgress"] = "IN PROGRESS";
    SearchResponseStatusEnum["Success"] = "SUCCESS";
    SearchResponseStatusEnum["Failed"] = "FAILED";
    SearchResponseStatusEnum["Expired"] = "EXPIRED";
    SearchResponseStatusEnum["Cancelled"] = "CANCELLED";
})(SearchResponseStatusEnum || (SearchResponseStatusEnum = {}));
// SearchResponse
/**
 * Success
**/
var SearchResponse = /** @class */ (function (_super) {
    __extends(SearchResponse, _super);
    function SearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_id" }),
        __metadata("design:type", String)
    ], SearchResponse.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=checks", elemType: SearchResponseChecks }),
        __metadata("design:type", Array)
    ], SearchResponse.prototype, "checks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], SearchResponse.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_finalized" }),
        __metadata("design:type", String)
    ], SearchResponse.prototype, "dateFinalized", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_submitted" }),
        __metadata("design:type", String)
    ], SearchResponse.prototype, "dateSubmitted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=estimated_price_messages_sent" }),
        __metadata("design:type", String)
    ], SearchResponse.prototype, "estimatedPriceMessagesSent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events", elemType: SearchResponseEvents }),
        __metadata("design:type", Array)
    ], SearchResponse.prototype, "events", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_event_date" }),
        __metadata("design:type", String)
    ], SearchResponse.prototype, "firstEventDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_event_date" }),
        __metadata("design:type", String)
    ], SearchResponse.prototype, "lastEventDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], SearchResponse.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", String)
    ], SearchResponse.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], SearchResponse.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sender_id" }),
        __metadata("design:type", String)
    ], SearchResponse.prototype, "senderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], SearchResponse.prototype, "status", void 0);
    return SearchResponse;
}(SpeakeasyBase));
export { SearchResponse };
