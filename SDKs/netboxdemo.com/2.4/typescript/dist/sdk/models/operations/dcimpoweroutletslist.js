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
var DcimPowerOutletsListQueryParams = /** @class */ (function (_super) {
    __extends(DcimPowerOutletsListQueryParams, _super);
    function DcimPowerOutletsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "device", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_id" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "deviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], DcimPowerOutletsListQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], DcimPowerOutletsListQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsListQueryParams.prototype, "tag", void 0);
    return DcimPowerOutletsListQueryParams;
}(SpeakeasyBase));
export { DcimPowerOutletsListQueryParams };
var DcimPowerOutletsList200ApplicationJson = /** @class */ (function (_super) {
    __extends(DcimPowerOutletsList200ApplicationJson, _super);
    function DcimPowerOutletsList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], DcimPowerOutletsList200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], DcimPowerOutletsList200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.PowerOutlet }),
        __metadata("design:type", Array)
    ], DcimPowerOutletsList200ApplicationJson.prototype, "results", void 0);
    return DcimPowerOutletsList200ApplicationJson;
}(SpeakeasyBase));
export { DcimPowerOutletsList200ApplicationJson };
var DcimPowerOutletsListRequest = /** @class */ (function (_super) {
    __extends(DcimPowerOutletsListRequest, _super);
    function DcimPowerOutletsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DcimPowerOutletsListQueryParams)
    ], DcimPowerOutletsListRequest.prototype, "queryParams", void 0);
    return DcimPowerOutletsListRequest;
}(SpeakeasyBase));
export { DcimPowerOutletsListRequest };
var DcimPowerOutletsListResponse = /** @class */ (function (_super) {
    __extends(DcimPowerOutletsListResponse, _super);
    function DcimPowerOutletsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DcimPowerOutletsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DcimPowerOutletsListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DcimPowerOutletsList200ApplicationJson)
    ], DcimPowerOutletsListResponse.prototype, "dcimPowerOutletsList200ApplicationJsonObject", void 0);
    return DcimPowerOutletsListResponse;
}(SpeakeasyBase));
export { DcimPowerOutletsListResponse };
