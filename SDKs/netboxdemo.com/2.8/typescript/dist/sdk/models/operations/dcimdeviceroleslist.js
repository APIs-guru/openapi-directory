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
var DcimDeviceRolesListQueryParams = /** @class */ (function (_super) {
    __extends(DcimDeviceRolesListQueryParams, _super);
    function DcimDeviceRolesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=color" }),
        __metadata("design:type", String)
    ], DcimDeviceRolesListQueryParams.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=color__ic" }),
        __metadata("design:type", String)
    ], DcimDeviceRolesListQueryParams.prototype, "colorIc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=color__ie" }),
        __metadata("design:type", String)
    ], DcimDeviceRolesListQueryParams.prototype, "colorIe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=color__iew" }),
        __metadata("design:type", String)
    ], DcimDeviceRolesListQueryParams.prototype, "colorIew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=color__isw" }),
        __metadata("design:type", String)
    ], DcimDeviceRolesListQueryParams.prototype, "colorIsw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=color__n" }),
        __metadata("design:type", String)
    ], DcimDeviceRolesListQueryParams.prototype, "colorN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=color__nic" }),
        __metadata("design:type", String)
    ], DcimDeviceRolesListQueryParams.prototype, "colorNic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=color__nie" }),
        __metadata("design:type", String)
    ], DcimDeviceRolesListQueryParams.prototype, "colorNie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=color__niew" }),
        __metadata("design:type", String)
    ], DcimDeviceRolesListQueryParams.prototype, "colorNiew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=color__nisw" }),
        __metadata("design:type", String)
    ], DcimDeviceRolesListQueryParams.prototype, "colorNisw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], DcimDeviceRolesListQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__gt" }),
        __metadata("design:type", String)
    ], DcimDeviceRolesListQueryParams.prototype, "idGt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__gte" }),
        __metadata("design:type", String)
    ], DcimDeviceRolesListQueryParams.prototype, "idGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__lt" }),
        __metadata("design:type", String)
    ], DcimDeviceRolesListQueryParams.prototype, "idLt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__lte" }),
        __metadata("design:type", String)
    ], DcimDeviceRolesListQueryParams.prototype, "idLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__n" }),
        __metadata("design:type", String)
    ], DcimDeviceRolesListQueryParams.prototype, "idN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], DcimDeviceRolesListQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], DcimDeviceRolesListQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__ic" }),
        __metadata("design:type", String)
    ], DcimDeviceRolesListQueryParams.prototype, "nameIc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__ie" }),
        __metadata("design:type", String)
    ], DcimDeviceRolesListQueryParams.prototype, "nameIe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__iew" }),
        __metadata("design:type", String)
    ], DcimDeviceRolesListQueryParams.prototype, "nameIew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__isw" }),
        __metadata("design:type", String)
    ], DcimDeviceRolesListQueryParams.prototype, "nameIsw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__n" }),
        __metadata("design:type", String)
    ], DcimDeviceRolesListQueryParams.prototype, "nameN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nic" }),
        __metadata("design:type", String)
    ], DcimDeviceRolesListQueryParams.prototype, "nameNic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nie" }),
        __metadata("design:type", String)
    ], DcimDeviceRolesListQueryParams.prototype, "nameNie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__niew" }),
        __metadata("design:type", String)
    ], DcimDeviceRolesListQueryParams.prototype, "nameNiew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nisw" }),
        __metadata("design:type", String)
    ], DcimDeviceRolesListQueryParams.prototype, "nameNisw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], DcimDeviceRolesListQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], DcimDeviceRolesListQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug" }),
        __metadata("design:type", String)
    ], DcimDeviceRolesListQueryParams.prototype, "slug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__ic" }),
        __metadata("design:type", String)
    ], DcimDeviceRolesListQueryParams.prototype, "slugIc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__ie" }),
        __metadata("design:type", String)
    ], DcimDeviceRolesListQueryParams.prototype, "slugIe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__iew" }),
        __metadata("design:type", String)
    ], DcimDeviceRolesListQueryParams.prototype, "slugIew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__isw" }),
        __metadata("design:type", String)
    ], DcimDeviceRolesListQueryParams.prototype, "slugIsw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__n" }),
        __metadata("design:type", String)
    ], DcimDeviceRolesListQueryParams.prototype, "slugN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__nic" }),
        __metadata("design:type", String)
    ], DcimDeviceRolesListQueryParams.prototype, "slugNic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__nie" }),
        __metadata("design:type", String)
    ], DcimDeviceRolesListQueryParams.prototype, "slugNie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__niew" }),
        __metadata("design:type", String)
    ], DcimDeviceRolesListQueryParams.prototype, "slugNiew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slug__nisw" }),
        __metadata("design:type", String)
    ], DcimDeviceRolesListQueryParams.prototype, "slugNisw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vm_role" }),
        __metadata("design:type", String)
    ], DcimDeviceRolesListQueryParams.prototype, "vmRole", void 0);
    return DcimDeviceRolesListQueryParams;
}(SpeakeasyBase));
export { DcimDeviceRolesListQueryParams };
var DcimDeviceRolesList200ApplicationJson = /** @class */ (function (_super) {
    __extends(DcimDeviceRolesList200ApplicationJson, _super);
    function DcimDeviceRolesList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], DcimDeviceRolesList200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], DcimDeviceRolesList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], DcimDeviceRolesList200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.DeviceRole }),
        __metadata("design:type", Array)
    ], DcimDeviceRolesList200ApplicationJson.prototype, "results", void 0);
    return DcimDeviceRolesList200ApplicationJson;
}(SpeakeasyBase));
export { DcimDeviceRolesList200ApplicationJson };
var DcimDeviceRolesListRequest = /** @class */ (function (_super) {
    __extends(DcimDeviceRolesListRequest, _super);
    function DcimDeviceRolesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DcimDeviceRolesListQueryParams)
    ], DcimDeviceRolesListRequest.prototype, "queryParams", void 0);
    return DcimDeviceRolesListRequest;
}(SpeakeasyBase));
export { DcimDeviceRolesListRequest };
var DcimDeviceRolesListResponse = /** @class */ (function (_super) {
    __extends(DcimDeviceRolesListResponse, _super);
    function DcimDeviceRolesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DcimDeviceRolesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DcimDeviceRolesListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DcimDeviceRolesList200ApplicationJson)
    ], DcimDeviceRolesListResponse.prototype, "dcimDeviceRolesList200ApplicationJsonObject", void 0);
    return DcimDeviceRolesListResponse;
}(SpeakeasyBase));
export { DcimDeviceRolesListResponse };
