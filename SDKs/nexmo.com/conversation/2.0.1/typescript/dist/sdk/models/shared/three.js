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
export var ThreeContentTypeEnum;
(function (ThreeContentTypeEnum) {
    ThreeContentTypeEnum["AudioL16RateEqual8000"] = "audio/l16;rate=8000";
    ThreeContentTypeEnum["AudioL16RateEqual16000"] = "audio/l16;rate=16000";
})(ThreeContentTypeEnum || (ThreeContentTypeEnum = {}));
// ThreeHeaders
/**
 * Details of the Websocket you want to connect to
**/
var ThreeHeaders = /** @class */ (function (_super) {
    __extends(ThreeHeaders, _super);
    function ThreeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customer_id" }),
        __metadata("design:type", String)
    ], ThreeHeaders.prototype, "customerId", void 0);
    return ThreeHeaders;
}(SpeakeasyBase));
export { ThreeHeaders };
// Three
/**
 * Connect to a Websocket
**/
var Three = /** @class */ (function (_super) {
    __extends(Three, _super);
    function Three() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content-type" }),
        __metadata("design:type", String)
    ], Three.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headers" }),
        __metadata("design:type", ThreeHeaders)
    ], Three.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Three.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], Three.prototype, "uri", void 0);
    return Three;
}(SpeakeasyBase));
export { Three };
