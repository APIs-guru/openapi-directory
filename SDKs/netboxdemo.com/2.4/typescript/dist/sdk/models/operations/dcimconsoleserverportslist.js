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
var DcimConsoleServerPortsListQueryParams = /** @class */ (function (_super) {
    __extends(DcimConsoleServerPortsListQueryParams, _super);
    function DcimConsoleServerPortsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device" }),
        __metadata("design:type", String)
    ], DcimConsoleServerPortsListQueryParams.prototype, "device", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_id" }),
        __metadata("design:type", String)
    ], DcimConsoleServerPortsListQueryParams.prototype, "deviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], DcimConsoleServerPortsListQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], DcimConsoleServerPortsListQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], DcimConsoleServerPortsListQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" }),
        __metadata("design:type", String)
    ], DcimConsoleServerPortsListQueryParams.prototype, "tag", void 0);
    return DcimConsoleServerPortsListQueryParams;
}(SpeakeasyBase));
export { DcimConsoleServerPortsListQueryParams };
var DcimConsoleServerPortsList200ApplicationJson = /** @class */ (function (_super) {
    __extends(DcimConsoleServerPortsList200ApplicationJson, _super);
    function DcimConsoleServerPortsList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], DcimConsoleServerPortsList200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], DcimConsoleServerPortsList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], DcimConsoleServerPortsList200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.ConsoleServerPort }),
        __metadata("design:type", Array)
    ], DcimConsoleServerPortsList200ApplicationJson.prototype, "results", void 0);
    return DcimConsoleServerPortsList200ApplicationJson;
}(SpeakeasyBase));
export { DcimConsoleServerPortsList200ApplicationJson };
var DcimConsoleServerPortsListRequest = /** @class */ (function (_super) {
    __extends(DcimConsoleServerPortsListRequest, _super);
    function DcimConsoleServerPortsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DcimConsoleServerPortsListQueryParams)
    ], DcimConsoleServerPortsListRequest.prototype, "queryParams", void 0);
    return DcimConsoleServerPortsListRequest;
}(SpeakeasyBase));
export { DcimConsoleServerPortsListRequest };
var DcimConsoleServerPortsListResponse = /** @class */ (function (_super) {
    __extends(DcimConsoleServerPortsListResponse, _super);
    function DcimConsoleServerPortsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DcimConsoleServerPortsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DcimConsoleServerPortsListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DcimConsoleServerPortsList200ApplicationJson)
    ], DcimConsoleServerPortsListResponse.prototype, "dcimConsoleServerPortsList200ApplicationJsonObject", void 0);
    return DcimConsoleServerPortsListResponse;
}(SpeakeasyBase));
export { DcimConsoleServerPortsListResponse };
