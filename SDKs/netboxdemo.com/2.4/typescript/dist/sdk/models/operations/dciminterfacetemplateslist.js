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
var DcimInterfaceTemplatesListQueryParams = /** @class */ (function (_super) {
    __extends(DcimInterfaceTemplatesListQueryParams, _super);
    function DcimInterfaceTemplatesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=devicetype_id" }),
        __metadata("design:type", String)
    ], DcimInterfaceTemplatesListQueryParams.prototype, "devicetypeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=form_factor" }),
        __metadata("design:type", String)
    ], DcimInterfaceTemplatesListQueryParams.prototype, "formFactor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], DcimInterfaceTemplatesListQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mgmt_only" }),
        __metadata("design:type", String)
    ], DcimInterfaceTemplatesListQueryParams.prototype, "mgmtOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], DcimInterfaceTemplatesListQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], DcimInterfaceTemplatesListQueryParams.prototype, "offset", void 0);
    return DcimInterfaceTemplatesListQueryParams;
}(SpeakeasyBase));
export { DcimInterfaceTemplatesListQueryParams };
var DcimInterfaceTemplatesList200ApplicationJson = /** @class */ (function (_super) {
    __extends(DcimInterfaceTemplatesList200ApplicationJson, _super);
    function DcimInterfaceTemplatesList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], DcimInterfaceTemplatesList200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], DcimInterfaceTemplatesList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], DcimInterfaceTemplatesList200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.InterfaceTemplate }),
        __metadata("design:type", Array)
    ], DcimInterfaceTemplatesList200ApplicationJson.prototype, "results", void 0);
    return DcimInterfaceTemplatesList200ApplicationJson;
}(SpeakeasyBase));
export { DcimInterfaceTemplatesList200ApplicationJson };
var DcimInterfaceTemplatesListRequest = /** @class */ (function (_super) {
    __extends(DcimInterfaceTemplatesListRequest, _super);
    function DcimInterfaceTemplatesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DcimInterfaceTemplatesListQueryParams)
    ], DcimInterfaceTemplatesListRequest.prototype, "queryParams", void 0);
    return DcimInterfaceTemplatesListRequest;
}(SpeakeasyBase));
export { DcimInterfaceTemplatesListRequest };
var DcimInterfaceTemplatesListResponse = /** @class */ (function (_super) {
    __extends(DcimInterfaceTemplatesListResponse, _super);
    function DcimInterfaceTemplatesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DcimInterfaceTemplatesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DcimInterfaceTemplatesListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DcimInterfaceTemplatesList200ApplicationJson)
    ], DcimInterfaceTemplatesListResponse.prototype, "dcimInterfaceTemplatesList200ApplicationJsonObject", void 0);
    return DcimInterfaceTemplatesListResponse;
}(SpeakeasyBase));
export { DcimInterfaceTemplatesListResponse };
