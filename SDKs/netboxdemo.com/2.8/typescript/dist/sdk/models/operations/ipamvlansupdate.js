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
var IpamVlansUpdatePathParams = /** @class */ (function (_super) {
    __extends(IpamVlansUpdatePathParams, _super);
    function IpamVlansUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], IpamVlansUpdatePathParams.prototype, "id", void 0);
    return IpamVlansUpdatePathParams;
}(SpeakeasyBase));
export { IpamVlansUpdatePathParams };
var IpamVlansUpdateRequest = /** @class */ (function (_super) {
    __extends(IpamVlansUpdateRequest, _super);
    function IpamVlansUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IpamVlansUpdatePathParams)
    ], IpamVlansUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.WritableVlanInput)
    ], IpamVlansUpdateRequest.prototype, "request", void 0);
    return IpamVlansUpdateRequest;
}(SpeakeasyBase));
export { IpamVlansUpdateRequest };
var IpamVlansUpdateResponse = /** @class */ (function (_super) {
    __extends(IpamVlansUpdateResponse, _super);
    function IpamVlansUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IpamVlansUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IpamVlansUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Vlan)
    ], IpamVlansUpdateResponse.prototype, "vlan", void 0);
    return IpamVlansUpdateResponse;
}(SpeakeasyBase));
export { IpamVlansUpdateResponse };
