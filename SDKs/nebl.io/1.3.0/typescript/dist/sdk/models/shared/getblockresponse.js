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
var GetBlockResponse = /** @class */ (function (_super) {
    __extends(GetBlockResponse, _super);
    function GetBlockResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bits" }),
        __metadata("design:type", String)
    ], GetBlockResponse.prototype, "bits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=confirmations" }),
        __metadata("design:type", Number)
    ], GetBlockResponse.prototype, "confirmations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=difficulty" }),
        __metadata("design:type", Number)
    ], GetBlockResponse.prototype, "difficulty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hash" }),
        __metadata("design:type", String)
    ], GetBlockResponse.prototype, "hash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=height" }),
        __metadata("design:type", Number)
    ], GetBlockResponse.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=merkleroot" }),
        __metadata("design:type", String)
    ], GetBlockResponse.prototype, "merkleroot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextblockhash" }),
        __metadata("design:type", String)
    ], GetBlockResponse.prototype, "nextblockhash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nonce" }),
        __metadata("design:type", Number)
    ], GetBlockResponse.prototype, "nonce", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previousblockhash" }),
        __metadata("design:type", String)
    ], GetBlockResponse.prototype, "previousblockhash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reward" }),
        __metadata("design:type", Number)
    ], GetBlockResponse.prototype, "reward", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], GetBlockResponse.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time" }),
        __metadata("design:type", Number)
    ], GetBlockResponse.prototype, "time", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tx" }),
        __metadata("design:type", Array)
    ], GetBlockResponse.prototype, "tx", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], GetBlockResponse.prototype, "version", void 0);
    return GetBlockResponse;
}(SpeakeasyBase));
export { GetBlockResponse };
