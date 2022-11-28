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
var ListLegs200ApplicationJsonEmbeddedLegs = /** @class */ (function (_super) {
    __extends(ListLegs200ApplicationJsonEmbeddedLegs, _super);
    function ListLegs200ApplicationJsonEmbeddedLegs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_embedded" }),
        __metadata("design:type", Map)
    ], ListLegs200ApplicationJsonEmbeddedLegs.prototype, "embedded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_links" }),
        __metadata("design:type", Map)
    ], ListLegs200ApplicationJsonEmbeddedLegs.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversation_uuid" }),
        __metadata("design:type", String)
    ], ListLegs200ApplicationJsonEmbeddedLegs.prototype, "conversationUuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=from" }),
        __metadata("design:type", Map)
    ], ListLegs200ApplicationJsonEmbeddedLegs.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_end" }),
        __metadata("design:type", String)
    ], ListLegs200ApplicationJsonEmbeddedLegs.prototype, "startEnd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start_time" }),
        __metadata("design:type", String)
    ], ListLegs200ApplicationJsonEmbeddedLegs.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], ListLegs200ApplicationJsonEmbeddedLegs.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=to" }),
        __metadata("design:type", Map)
    ], ListLegs200ApplicationJsonEmbeddedLegs.prototype, "to", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ListLegs200ApplicationJsonEmbeddedLegs.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], ListLegs200ApplicationJsonEmbeddedLegs.prototype, "uuid", void 0);
    return ListLegs200ApplicationJsonEmbeddedLegs;
}(SpeakeasyBase));
export { ListLegs200ApplicationJsonEmbeddedLegs };
// ListLegs200ApplicationJsonEmbedded
/**
 * A list of conversation objects. See the [get details of a specific conversation](#retrieveConversation) response fields for a description of the nested objects
**/
var ListLegs200ApplicationJsonEmbedded = /** @class */ (function (_super) {
    __extends(ListLegs200ApplicationJsonEmbedded, _super);
    function ListLegs200ApplicationJsonEmbedded() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=legs", elemType: ListLegs200ApplicationJsonEmbeddedLegs }),
        __metadata("design:type", Array)
    ], ListLegs200ApplicationJsonEmbedded.prototype, "legs", void 0);
    return ListLegs200ApplicationJsonEmbedded;
}(SpeakeasyBase));
export { ListLegs200ApplicationJsonEmbedded };
var ListLegs200ApplicationJsonLinksSelf = /** @class */ (function (_super) {
    __extends(ListLegs200ApplicationJsonLinksSelf, _super);
    function ListLegs200ApplicationJsonLinksSelf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], ListLegs200ApplicationJsonLinksSelf.prototype, "href", void 0);
    return ListLegs200ApplicationJsonLinksSelf;
}(SpeakeasyBase));
export { ListLegs200ApplicationJsonLinksSelf };
var ListLegs200ApplicationJsonLinks = /** @class */ (function (_super) {
    __extends(ListLegs200ApplicationJsonLinks, _super);
    function ListLegs200ApplicationJsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=self" }),
        __metadata("design:type", ListLegs200ApplicationJsonLinksSelf)
    ], ListLegs200ApplicationJsonLinks.prototype, "self", void 0);
    return ListLegs200ApplicationJsonLinks;
}(SpeakeasyBase));
export { ListLegs200ApplicationJsonLinks };
// ListLegs200ApplicationJson
/**
 * List Legs Response Payload Object
**/
var ListLegs200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListLegs200ApplicationJson, _super);
    function ListLegs200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_embedded" }),
        __metadata("design:type", ListLegs200ApplicationJsonEmbedded)
    ], ListLegs200ApplicationJson.prototype, "embedded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_links" }),
        __metadata("design:type", ListLegs200ApplicationJsonLinks)
    ], ListLegs200ApplicationJson.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], ListLegs200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListLegs200ApplicationJson.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=record_index" }),
        __metadata("design:type", Number)
    ], ListLegs200ApplicationJson.prototype, "recordIndex", void 0);
    return ListLegs200ApplicationJson;
}(SpeakeasyBase));
export { ListLegs200ApplicationJson };
var ListLegsResponse = /** @class */ (function (_super) {
    __extends(ListLegsResponse, _super);
    function ListLegsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListLegsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListLegsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListLegs200ApplicationJson)
    ], ListLegsResponse.prototype, "listLegs200ApplicationJsonObject", void 0);
    return ListLegsResponse;
}(SpeakeasyBase));
export { ListLegsResponse };
