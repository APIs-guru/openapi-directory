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
export var ListAndSearchMediaItemsOrderEnum;
(function (ListAndSearchMediaItemsOrderEnum) {
    ListAndSearchMediaItemsOrderEnum["Ascending"] = "ascending";
    ListAndSearchMediaItemsOrderEnum["Descending"] = "descending";
})(ListAndSearchMediaItemsOrderEnum || (ListAndSearchMediaItemsOrderEnum = {}));
var ListAndSearchMediaItemsQueryParams = /** @class */ (function (_super) {
    __extends(ListAndSearchMediaItemsQueryParams, _super);
    function ListAndSearchMediaItemsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=end_time" }),
        __metadata("design:type", String)
    ], ListAndSearchMediaItemsQueryParams.prototype, "endTime", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], ListAndSearchMediaItemsQueryParams.prototype, "order", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page_index" }),
        __metadata("design:type", Number)
    ], ListAndSearchMediaItemsQueryParams.prototype, "pageIndex", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], ListAndSearchMediaItemsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=start_time" }),
        __metadata("design:type", String)
    ], ListAndSearchMediaItemsQueryParams.prototype, "startTime", void 0);
    return ListAndSearchMediaItemsQueryParams;
}(SpeakeasyBase));
export { ListAndSearchMediaItemsQueryParams };
var ListAndSearchMediaItemsRequest = /** @class */ (function (_super) {
    __extends(ListAndSearchMediaItemsRequest, _super);
    function ListAndSearchMediaItemsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListAndSearchMediaItemsQueryParams)
    ], ListAndSearchMediaItemsRequest.prototype, "queryParams", void 0);
    return ListAndSearchMediaItemsRequest;
}(SpeakeasyBase));
export { ListAndSearchMediaItemsRequest };
// ListAndSearchMediaItems200ApplicationJsonEmbedded
/**
 * A collection of media items. See [retrieve a media item](#retrieve-a-media-item) for a description of the returned fields
**/
var ListAndSearchMediaItems200ApplicationJsonEmbedded = /** @class */ (function (_super) {
    __extends(ListAndSearchMediaItems200ApplicationJsonEmbedded, _super);
    function ListAndSearchMediaItems200ApplicationJsonEmbedded() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=media", elemType: shared.Media }),
        __metadata("design:type", Array)
    ], ListAndSearchMediaItems200ApplicationJsonEmbedded.prototype, "media", void 0);
    return ListAndSearchMediaItems200ApplicationJsonEmbedded;
}(SpeakeasyBase));
export { ListAndSearchMediaItems200ApplicationJsonEmbedded };
var ListAndSearchMediaItems200ApplicationJsonLinksFirst = /** @class */ (function (_super) {
    __extends(ListAndSearchMediaItems200ApplicationJsonLinksFirst, _super);
    function ListAndSearchMediaItems200ApplicationJsonLinksFirst() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], ListAndSearchMediaItems200ApplicationJsonLinksFirst.prototype, "href", void 0);
    return ListAndSearchMediaItems200ApplicationJsonLinksFirst;
}(SpeakeasyBase));
export { ListAndSearchMediaItems200ApplicationJsonLinksFirst };
var ListAndSearchMediaItems200ApplicationJsonLinksLast = /** @class */ (function (_super) {
    __extends(ListAndSearchMediaItems200ApplicationJsonLinksLast, _super);
    function ListAndSearchMediaItems200ApplicationJsonLinksLast() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], ListAndSearchMediaItems200ApplicationJsonLinksLast.prototype, "href", void 0);
    return ListAndSearchMediaItems200ApplicationJsonLinksLast;
}(SpeakeasyBase));
export { ListAndSearchMediaItems200ApplicationJsonLinksLast };
var ListAndSearchMediaItems200ApplicationJsonLinksSelf = /** @class */ (function (_super) {
    __extends(ListAndSearchMediaItems200ApplicationJsonLinksSelf, _super);
    function ListAndSearchMediaItems200ApplicationJsonLinksSelf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], ListAndSearchMediaItems200ApplicationJsonLinksSelf.prototype, "href", void 0);
    return ListAndSearchMediaItems200ApplicationJsonLinksSelf;
}(SpeakeasyBase));
export { ListAndSearchMediaItems200ApplicationJsonLinksSelf };
var ListAndSearchMediaItems200ApplicationJsonLinks = /** @class */ (function (_super) {
    __extends(ListAndSearchMediaItems200ApplicationJsonLinks, _super);
    function ListAndSearchMediaItems200ApplicationJsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first" }),
        __metadata("design:type", ListAndSearchMediaItems200ApplicationJsonLinksFirst)
    ], ListAndSearchMediaItems200ApplicationJsonLinks.prototype, "first", void 0);
    __decorate([
        Metadata({ data: "json, name=last" }),
        __metadata("design:type", ListAndSearchMediaItems200ApplicationJsonLinksLast)
    ], ListAndSearchMediaItems200ApplicationJsonLinks.prototype, "last", void 0);
    __decorate([
        Metadata({ data: "json, name=self" }),
        __metadata("design:type", ListAndSearchMediaItems200ApplicationJsonLinksSelf)
    ], ListAndSearchMediaItems200ApplicationJsonLinks.prototype, "self", void 0);
    return ListAndSearchMediaItems200ApplicationJsonLinks;
}(SpeakeasyBase));
export { ListAndSearchMediaItems200ApplicationJsonLinks };
var ListAndSearchMediaItems200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAndSearchMediaItems200ApplicationJson, _super);
    function ListAndSearchMediaItems200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=_embedded" }),
        __metadata("design:type", ListAndSearchMediaItems200ApplicationJsonEmbedded)
    ], ListAndSearchMediaItems200ApplicationJson.prototype, "embedded", void 0);
    __decorate([
        Metadata({ data: "json, name=_links" }),
        __metadata("design:type", ListAndSearchMediaItems200ApplicationJsonLinks)
    ], ListAndSearchMediaItems200ApplicationJson.prototype, "links", void 0);
    __decorate([
        Metadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], ListAndSearchMediaItems200ApplicationJson.prototype, "count", void 0);
    __decorate([
        Metadata({ data: "json, name=page_index" }),
        __metadata("design:type", Number)
    ], ListAndSearchMediaItems200ApplicationJson.prototype, "pageIndex", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListAndSearchMediaItems200ApplicationJson.prototype, "pageSize", void 0);
    return ListAndSearchMediaItems200ApplicationJson;
}(SpeakeasyBase));
export { ListAndSearchMediaItems200ApplicationJson };
var ListAndSearchMediaItemsResponse = /** @class */ (function (_super) {
    __extends(ListAndSearchMediaItemsResponse, _super);
    function ListAndSearchMediaItemsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListAndSearchMediaItemsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListAndSearchMediaItemsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListAndSearchMediaItems200ApplicationJson)
    ], ListAndSearchMediaItemsResponse.prototype, "listAndSearchMediaItems200ApplicationJsonObject", void 0);
    return ListAndSearchMediaItemsResponse;
}(SpeakeasyBase));
export { ListAndSearchMediaItemsResponse };
