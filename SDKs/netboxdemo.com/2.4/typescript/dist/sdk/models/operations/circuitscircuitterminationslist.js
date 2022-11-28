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
var CircuitsCircuitTerminationsListQueryParams = /** @class */ (function (_super) {
    __extends(CircuitsCircuitTerminationsListQueryParams, _super);
    function CircuitsCircuitTerminationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=circuit_id" }),
        __metadata("design:type", String)
    ], CircuitsCircuitTerminationsListQueryParams.prototype, "circuitId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], CircuitsCircuitTerminationsListQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], CircuitsCircuitTerminationsListQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=port_speed" }),
        __metadata("design:type", Number)
    ], CircuitsCircuitTerminationsListQueryParams.prototype, "portSpeed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], CircuitsCircuitTerminationsListQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], CircuitsCircuitTerminationsListQueryParams.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site_id" }),
        __metadata("design:type", String)
    ], CircuitsCircuitTerminationsListQueryParams.prototype, "siteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=term_side" }),
        __metadata("design:type", String)
    ], CircuitsCircuitTerminationsListQueryParams.prototype, "termSide", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upstream_speed" }),
        __metadata("design:type", Number)
    ], CircuitsCircuitTerminationsListQueryParams.prototype, "upstreamSpeed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=xconnect_id" }),
        __metadata("design:type", String)
    ], CircuitsCircuitTerminationsListQueryParams.prototype, "xconnectId", void 0);
    return CircuitsCircuitTerminationsListQueryParams;
}(SpeakeasyBase));
export { CircuitsCircuitTerminationsListQueryParams };
var CircuitsCircuitTerminationsList200ApplicationJson = /** @class */ (function (_super) {
    __extends(CircuitsCircuitTerminationsList200ApplicationJson, _super);
    function CircuitsCircuitTerminationsList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], CircuitsCircuitTerminationsList200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], CircuitsCircuitTerminationsList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], CircuitsCircuitTerminationsList200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.CircuitTermination }),
        __metadata("design:type", Array)
    ], CircuitsCircuitTerminationsList200ApplicationJson.prototype, "results", void 0);
    return CircuitsCircuitTerminationsList200ApplicationJson;
}(SpeakeasyBase));
export { CircuitsCircuitTerminationsList200ApplicationJson };
var CircuitsCircuitTerminationsListRequest = /** @class */ (function (_super) {
    __extends(CircuitsCircuitTerminationsListRequest, _super);
    function CircuitsCircuitTerminationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CircuitsCircuitTerminationsListQueryParams)
    ], CircuitsCircuitTerminationsListRequest.prototype, "queryParams", void 0);
    return CircuitsCircuitTerminationsListRequest;
}(SpeakeasyBase));
export { CircuitsCircuitTerminationsListRequest };
var CircuitsCircuitTerminationsListResponse = /** @class */ (function (_super) {
    __extends(CircuitsCircuitTerminationsListResponse, _super);
    function CircuitsCircuitTerminationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CircuitsCircuitTerminationsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CircuitsCircuitTerminationsListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CircuitsCircuitTerminationsList200ApplicationJson)
    ], CircuitsCircuitTerminationsListResponse.prototype, "circuitsCircuitTerminationsList200ApplicationJsonObject", void 0);
    return CircuitsCircuitTerminationsListResponse;
}(SpeakeasyBase));
export { CircuitsCircuitTerminationsListResponse };
