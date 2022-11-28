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
var GetNetworkEventsPathParams = /** @class */ (function (_super) {
    __extends(GetNetworkEventsPathParams, _super);
    function GetNetworkEventsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], GetNetworkEventsPathParams.prototype, "networkId", void 0);
    return GetNetworkEventsPathParams;
}(SpeakeasyBase));
export { GetNetworkEventsPathParams };
export var GetNetworkEventsProductTypeEnum;
(function (GetNetworkEventsProductTypeEnum) {
    GetNetworkEventsProductTypeEnum["Wireless"] = "wireless";
    GetNetworkEventsProductTypeEnum["Appliance"] = "appliance";
    GetNetworkEventsProductTypeEnum["Switch"] = "switch";
    GetNetworkEventsProductTypeEnum["SystemsManager"] = "systemsManager";
    GetNetworkEventsProductTypeEnum["Camera"] = "camera";
    GetNetworkEventsProductTypeEnum["CellularGateway"] = "cellularGateway";
})(GetNetworkEventsProductTypeEnum || (GetNetworkEventsProductTypeEnum = {}));
var GetNetworkEventsQueryParams = /** @class */ (function (_super) {
    __extends(GetNetworkEventsQueryParams, _super);
    function GetNetworkEventsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientIp" }),
        __metadata("design:type", String)
    ], GetNetworkEventsQueryParams.prototype, "clientIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientMac" }),
        __metadata("design:type", String)
    ], GetNetworkEventsQueryParams.prototype, "clientMac", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientName" }),
        __metadata("design:type", String)
    ], GetNetworkEventsQueryParams.prototype, "clientName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deviceMac" }),
        __metadata("design:type", String)
    ], GetNetworkEventsQueryParams.prototype, "deviceMac", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deviceName" }),
        __metadata("design:type", String)
    ], GetNetworkEventsQueryParams.prototype, "deviceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deviceSerial" }),
        __metadata("design:type", String)
    ], GetNetworkEventsQueryParams.prototype, "deviceSerial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endingBefore" }),
        __metadata("design:type", String)
    ], GetNetworkEventsQueryParams.prototype, "endingBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=excludedEventTypes" }),
        __metadata("design:type", Array)
    ], GetNetworkEventsQueryParams.prototype, "excludedEventTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=includedEventTypes" }),
        __metadata("design:type", Array)
    ], GetNetworkEventsQueryParams.prototype, "includedEventTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=perPage" }),
        __metadata("design:type", Number)
    ], GetNetworkEventsQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=productType" }),
        __metadata("design:type", String)
    ], GetNetworkEventsQueryParams.prototype, "productType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=smDeviceMac" }),
        __metadata("design:type", String)
    ], GetNetworkEventsQueryParams.prototype, "smDeviceMac", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=smDeviceName" }),
        __metadata("design:type", String)
    ], GetNetworkEventsQueryParams.prototype, "smDeviceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startingAfter" }),
        __metadata("design:type", String)
    ], GetNetworkEventsQueryParams.prototype, "startingAfter", void 0);
    return GetNetworkEventsQueryParams;
}(SpeakeasyBase));
export { GetNetworkEventsQueryParams };
var GetNetworkEventsRequest = /** @class */ (function (_super) {
    __extends(GetNetworkEventsRequest, _super);
    function GetNetworkEventsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkEventsPathParams)
    ], GetNetworkEventsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkEventsQueryParams)
    ], GetNetworkEventsRequest.prototype, "queryParams", void 0);
    return GetNetworkEventsRequest;
}(SpeakeasyBase));
export { GetNetworkEventsRequest };
var GetNetworkEventsResponse = /** @class */ (function (_super) {
    __extends(GetNetworkEventsResponse, _super);
    function GetNetworkEventsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNetworkEventsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetNetworkEventsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNetworkEventsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetNetworkEventsResponse.prototype, "getNetworkEvents200ApplicationJsonObject", void 0);
    return GetNetworkEventsResponse;
}(SpeakeasyBase));
export { GetNetworkEventsResponse };
