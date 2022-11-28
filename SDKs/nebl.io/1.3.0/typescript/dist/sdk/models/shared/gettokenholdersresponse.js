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
var GetTokenHoldersResponseHolders = /** @class */ (function (_super) {
    __extends(GetTokenHoldersResponseHolders, _super);
    function GetTokenHoldersResponseHolders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], GetTokenHoldersResponseHolders.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], GetTokenHoldersResponseHolders.prototype, "amount", void 0);
    return GetTokenHoldersResponseHolders;
}(SpeakeasyBase));
export { GetTokenHoldersResponseHolders };
var GetTokenHoldersResponse = /** @class */ (function (_super) {
    __extends(GetTokenHoldersResponse, _super);
    function GetTokenHoldersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aggregationPolicy" }),
        __metadata("design:type", String)
    ], GetTokenHoldersResponse.prototype, "aggregationPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=divibility" }),
        __metadata("design:type", Number)
    ], GetTokenHoldersResponse.prototype, "divibility", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=holders", elemType: GetTokenHoldersResponseHolders }),
        __metadata("design:type", Array)
    ], GetTokenHoldersResponse.prototype, "holders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lockStatus" }),
        __metadata("design:type", Boolean)
    ], GetTokenHoldersResponse.prototype, "lockStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=someUtxo" }),
        __metadata("design:type", String)
    ], GetTokenHoldersResponse.prototype, "someUtxo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tokenId" }),
        __metadata("design:type", String)
    ], GetTokenHoldersResponse.prototype, "tokenId", void 0);
    return GetTokenHoldersResponse;
}(SpeakeasyBase));
export { GetTokenHoldersResponse };
