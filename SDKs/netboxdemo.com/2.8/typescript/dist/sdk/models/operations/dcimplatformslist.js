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
var DcimPlatformsListQueryParams = /** @class */ (function (_super) {
    __extends(DcimPlatformsListQueryParams, _super);
    function DcimPlatformsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__ic" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "descriptionIc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__ie" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "descriptionIe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__iew" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "descriptionIew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__isw" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "descriptionIsw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__n" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "descriptionN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__nic" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "descriptionNic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__nie" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "descriptionNie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__niew" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "descriptionNiew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description__nisw" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "descriptionNisw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__gt" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "idGt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__gte" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "idGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__lt" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "idLt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__lte" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "idLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__n" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "idN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], DcimPlatformsListQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=manufacturer" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "manufacturer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=manufacturer__n" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "manufacturerN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=manufacturer_id" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "manufacturerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=manufacturer_id__n" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "manufacturerIdN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__ic" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "nameIc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__ie" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "nameIe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__iew" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "nameIew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__isw" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "nameIsw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__n" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "nameN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nic" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "nameNic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nie" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "nameNie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__niew" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "nameNiew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nisw" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "nameNisw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=napalm_driver" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "napalmDriver", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=napalm_driver__ic" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "napalmDriverIc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=napalm_driver__ie" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "napalmDriverIe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=napalm_driver__iew" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "napalmDriverIew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=napalm_driver__isw" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "napalmDriverIsw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=napalm_driver__n" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "napalmDriverN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=napalm_driver__nic" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "napalmDriverNic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=napalm_driver__nie" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "napalmDriverNie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=napalm_driver__niew" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "napalmDriverNiew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=napalm_driver__nisw" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "napalmDriverNisw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], DcimPlatformsListQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "slug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__ic" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "slugIc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__ie" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "slugIe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__iew" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "slugIew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__isw" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "slugIsw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__n" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "slugN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__nic" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "slugNic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__nie" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "slugNie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__niew" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "slugNiew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__nisw" }),
        __metadata("design:type", String)
    ], DcimPlatformsListQueryParams.prototype, "slugNisw", void 0);
    return DcimPlatformsListQueryParams;
}(SpeakeasyBase));
export { DcimPlatformsListQueryParams };
var DcimPlatformsList200ApplicationJson = /** @class */ (function (_super) {
    __extends(DcimPlatformsList200ApplicationJson, _super);
    function DcimPlatformsList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], DcimPlatformsList200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], DcimPlatformsList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], DcimPlatformsList200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Platform }),
        __metadata("design:type", Array)
    ], DcimPlatformsList200ApplicationJson.prototype, "results", void 0);
    return DcimPlatformsList200ApplicationJson;
}(SpeakeasyBase));
export { DcimPlatformsList200ApplicationJson };
var DcimPlatformsListRequest = /** @class */ (function (_super) {
    __extends(DcimPlatformsListRequest, _super);
    function DcimPlatformsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DcimPlatformsListQueryParams)
    ], DcimPlatformsListRequest.prototype, "queryParams", void 0);
    return DcimPlatformsListRequest;
}(SpeakeasyBase));
export { DcimPlatformsListRequest };
var DcimPlatformsListResponse = /** @class */ (function (_super) {
    __extends(DcimPlatformsListResponse, _super);
    function DcimPlatformsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DcimPlatformsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DcimPlatformsListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DcimPlatformsList200ApplicationJson)
    ], DcimPlatformsListResponse.prototype, "dcimPlatformsList200ApplicationJsonObject", void 0);
    return DcimPlatformsListResponse;
}(SpeakeasyBase));
export { DcimPlatformsListResponse };
