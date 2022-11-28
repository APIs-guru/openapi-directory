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
var ListConversationsQueryParams = /** @class */ (function (_super) {
    __extends(ListConversationsQueryParams, _super);
    function ListConversationsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_end" }),
        __metadata("design:type", String)
    ], ListConversationsQueryParams.prototype, "dateEnd", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_start" }),
        __metadata("design:type", String)
    ], ListConversationsQueryParams.prototype, "dateStart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], ListConversationsQueryParams.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], ListConversationsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=record_index" }),
        __metadata("design:type", Number)
    ], ListConversationsQueryParams.prototype, "recordIndex", void 0);
    return ListConversationsQueryParams;
}(SpeakeasyBase));
export { ListConversationsQueryParams };
var ListConversations200ApplicationJsonEmbeddedConversationsLinksSelf = /** @class */ (function (_super) {
    __extends(ListConversations200ApplicationJsonEmbeddedConversationsLinksSelf, _super);
    function ListConversations200ApplicationJsonEmbeddedConversationsLinksSelf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], ListConversations200ApplicationJsonEmbeddedConversationsLinksSelf.prototype, "href", void 0);
    return ListConversations200ApplicationJsonEmbeddedConversationsLinksSelf;
}(SpeakeasyBase));
export { ListConversations200ApplicationJsonEmbeddedConversationsLinksSelf };
var ListConversations200ApplicationJsonEmbeddedConversationsLinks = /** @class */ (function (_super) {
    __extends(ListConversations200ApplicationJsonEmbeddedConversationsLinks, _super);
    function ListConversations200ApplicationJsonEmbeddedConversationsLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=self" }),
        __metadata("design:type", ListConversations200ApplicationJsonEmbeddedConversationsLinksSelf)
    ], ListConversations200ApplicationJsonEmbeddedConversationsLinks.prototype, "self", void 0);
    return ListConversations200ApplicationJsonEmbeddedConversationsLinks;
}(SpeakeasyBase));
export { ListConversations200ApplicationJsonEmbeddedConversationsLinks };
var ListConversations200ApplicationJsonEmbeddedConversations = /** @class */ (function (_super) {
    __extends(ListConversations200ApplicationJsonEmbeddedConversations, _super);
    function ListConversations200ApplicationJsonEmbeddedConversations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_links" }),
        __metadata("design:type", ListConversations200ApplicationJsonEmbeddedConversationsLinks)
    ], ListConversations200ApplicationJsonEmbeddedConversations.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListConversations200ApplicationJsonEmbeddedConversations.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], ListConversations200ApplicationJsonEmbeddedConversations.prototype, "uuid", void 0);
    return ListConversations200ApplicationJsonEmbeddedConversations;
}(SpeakeasyBase));
export { ListConversations200ApplicationJsonEmbeddedConversations };
// ListConversations200ApplicationJsonEmbedded
/**
 * A list of conversation objects. See the [get details of a specific conversation](#retrieveConversation) response fields for a description of the nested objects
**/
var ListConversations200ApplicationJsonEmbedded = /** @class */ (function (_super) {
    __extends(ListConversations200ApplicationJsonEmbedded, _super);
    function ListConversations200ApplicationJsonEmbedded() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=conversations", elemType: ListConversations200ApplicationJsonEmbeddedConversations }),
        __metadata("design:type", Array)
    ], ListConversations200ApplicationJsonEmbedded.prototype, "conversations", void 0);
    return ListConversations200ApplicationJsonEmbedded;
}(SpeakeasyBase));
export { ListConversations200ApplicationJsonEmbedded };
var ListConversations200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListConversations200ApplicationJson, _super);
    function ListConversations200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_embedded" }),
        __metadata("design:type", ListConversations200ApplicationJsonEmbedded)
    ], ListConversations200ApplicationJson.prototype, "embedded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_links" }),
        __metadata("design:type", shared.LinksConversationsList)
    ], ListConversations200ApplicationJson.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], ListConversations200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListConversations200ApplicationJson.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=record_index" }),
        __metadata("design:type", Number)
    ], ListConversations200ApplicationJson.prototype, "recordIndex", void 0);
    return ListConversations200ApplicationJson;
}(SpeakeasyBase));
export { ListConversations200ApplicationJson };
var ListConversationsRequest = /** @class */ (function (_super) {
    __extends(ListConversationsRequest, _super);
    function ListConversationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListConversationsQueryParams)
    ], ListConversationsRequest.prototype, "queryParams", void 0);
    return ListConversationsRequest;
}(SpeakeasyBase));
export { ListConversationsRequest };
var ListConversationsResponse = /** @class */ (function (_super) {
    __extends(ListConversationsResponse, _super);
    function ListConversationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListConversationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListConversationsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListConversations200ApplicationJson)
    ], ListConversationsResponse.prototype, "listConversations200ApplicationJsonObject", void 0);
    return ListConversationsResponse;
}(SpeakeasyBase));
export { ListConversationsResponse };
