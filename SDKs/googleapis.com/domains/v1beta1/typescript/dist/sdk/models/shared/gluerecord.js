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
// GlueRecord
/**
 * Defines a host on your domain that is a DNS name server for your domain and/or other domains. Glue records are a way of making the IP address of a name server known, even when it serves DNS queries for its parent domain. For example, when `ns.example.com` is a name server for `example.com`, the host `ns.example.com` must have a glue record to break the circular DNS reference.
**/
var GlueRecord = /** @class */ (function (_super) {
    __extends(GlueRecord, _super);
    function GlueRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hostName" }),
        __metadata("design:type", String)
    ], GlueRecord.prototype, "hostName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipv4Addresses" }),
        __metadata("design:type", Array)
    ], GlueRecord.prototype, "ipv4Addresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipv6Addresses" }),
        __metadata("design:type", Array)
    ], GlueRecord.prototype, "ipv6Addresses", void 0);
    return GlueRecord;
}(SpeakeasyBase));
export { GlueRecord };
