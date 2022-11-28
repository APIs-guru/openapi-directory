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
var ExtrasTagsListQueryParams = /** @class */ (function (_super) {
    __extends(ExtrasTagsListQueryParams, _super);
    function ExtrasTagsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=color" }),
        __metadata("design:type", String)
    ], ExtrasTagsListQueryParams.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=color__ic" }),
        __metadata("design:type", String)
    ], ExtrasTagsListQueryParams.prototype, "colorIc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=color__ie" }),
        __metadata("design:type", String)
    ], ExtrasTagsListQueryParams.prototype, "colorIe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=color__iew" }),
        __metadata("design:type", String)
    ], ExtrasTagsListQueryParams.prototype, "colorIew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=color__isw" }),
        __metadata("design:type", String)
    ], ExtrasTagsListQueryParams.prototype, "colorIsw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=color__n" }),
        __metadata("design:type", String)
    ], ExtrasTagsListQueryParams.prototype, "colorN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=color__nic" }),
        __metadata("design:type", String)
    ], ExtrasTagsListQueryParams.prototype, "colorNic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=color__nie" }),
        __metadata("design:type", String)
    ], ExtrasTagsListQueryParams.prototype, "colorNie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=color__niew" }),
        __metadata("design:type", String)
    ], ExtrasTagsListQueryParams.prototype, "colorNiew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=color__nisw" }),
        __metadata("design:type", String)
    ], ExtrasTagsListQueryParams.prototype, "colorNisw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], ExtrasTagsListQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__gt" }),
        __metadata("design:type", String)
    ], ExtrasTagsListQueryParams.prototype, "idGt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__gte" }),
        __metadata("design:type", String)
    ], ExtrasTagsListQueryParams.prototype, "idGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__lt" }),
        __metadata("design:type", String)
    ], ExtrasTagsListQueryParams.prototype, "idLt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__lte" }),
        __metadata("design:type", String)
    ], ExtrasTagsListQueryParams.prototype, "idLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__n" }),
        __metadata("design:type", String)
    ], ExtrasTagsListQueryParams.prototype, "idN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], ExtrasTagsListQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], ExtrasTagsListQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__ic" }),
        __metadata("design:type", String)
    ], ExtrasTagsListQueryParams.prototype, "nameIc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__ie" }),
        __metadata("design:type", String)
    ], ExtrasTagsListQueryParams.prototype, "nameIe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__iew" }),
        __metadata("design:type", String)
    ], ExtrasTagsListQueryParams.prototype, "nameIew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__isw" }),
        __metadata("design:type", String)
    ], ExtrasTagsListQueryParams.prototype, "nameIsw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__n" }),
        __metadata("design:type", String)
    ], ExtrasTagsListQueryParams.prototype, "nameN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nic" }),
        __metadata("design:type", String)
    ], ExtrasTagsListQueryParams.prototype, "nameNic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nie" }),
        __metadata("design:type", String)
    ], ExtrasTagsListQueryParams.prototype, "nameNie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__niew" }),
        __metadata("design:type", String)
    ], ExtrasTagsListQueryParams.prototype, "nameNiew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nisw" }),
        __metadata("design:type", String)
    ], ExtrasTagsListQueryParams.prototype, "nameNisw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], ExtrasTagsListQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], ExtrasTagsListQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug" }),
        __metadata("design:type", String)
    ], ExtrasTagsListQueryParams.prototype, "slug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__ic" }),
        __metadata("design:type", String)
    ], ExtrasTagsListQueryParams.prototype, "slugIc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__ie" }),
        __metadata("design:type", String)
    ], ExtrasTagsListQueryParams.prototype, "slugIe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__iew" }),
        __metadata("design:type", String)
    ], ExtrasTagsListQueryParams.prototype, "slugIew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__isw" }),
        __metadata("design:type", String)
    ], ExtrasTagsListQueryParams.prototype, "slugIsw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__n" }),
        __metadata("design:type", String)
    ], ExtrasTagsListQueryParams.prototype, "slugN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__nic" }),
        __metadata("design:type", String)
    ], ExtrasTagsListQueryParams.prototype, "slugNic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__nie" }),
        __metadata("design:type", String)
    ], ExtrasTagsListQueryParams.prototype, "slugNie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__niew" }),
        __metadata("design:type", String)
    ], ExtrasTagsListQueryParams.prototype, "slugNiew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__nisw" }),
        __metadata("design:type", String)
    ], ExtrasTagsListQueryParams.prototype, "slugNisw", void 0);
    return ExtrasTagsListQueryParams;
}(SpeakeasyBase));
export { ExtrasTagsListQueryParams };
var ExtrasTagsList200ApplicationJson = /** @class */ (function (_super) {
    __extends(ExtrasTagsList200ApplicationJson, _super);
    function ExtrasTagsList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], ExtrasTagsList200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], ExtrasTagsList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], ExtrasTagsList200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Tag }),
        __metadata("design:type", Array)
    ], ExtrasTagsList200ApplicationJson.prototype, "results", void 0);
    return ExtrasTagsList200ApplicationJson;
}(SpeakeasyBase));
export { ExtrasTagsList200ApplicationJson };
var ExtrasTagsListRequest = /** @class */ (function (_super) {
    __extends(ExtrasTagsListRequest, _super);
    function ExtrasTagsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExtrasTagsListQueryParams)
    ], ExtrasTagsListRequest.prototype, "queryParams", void 0);
    return ExtrasTagsListRequest;
}(SpeakeasyBase));
export { ExtrasTagsListRequest };
var ExtrasTagsListResponse = /** @class */ (function (_super) {
    __extends(ExtrasTagsListResponse, _super);
    function ExtrasTagsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ExtrasTagsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ExtrasTagsListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ExtrasTagsList200ApplicationJson)
    ], ExtrasTagsListResponse.prototype, "extrasTagsList200ApplicationJsonObject", void 0);
    return ExtrasTagsListResponse;
}(SpeakeasyBase));
export { ExtrasTagsListResponse };
