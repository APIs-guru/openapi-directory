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
export var DomainRecordTagEnum;
(function (DomainRecordTagEnum) {
    DomainRecordTagEnum["Issue"] = "issue";
    DomainRecordTagEnum["Issuewild"] = "issuewild";
    DomainRecordTagEnum["Iodef"] = "iodef";
})(DomainRecordTagEnum || (DomainRecordTagEnum = {}));
export var DomainRecordTypeEnum;
(function (DomainRecordTypeEnum) {
    DomainRecordTypeEnum["A"] = "A";
    DomainRecordTypeEnum["Aaaa"] = "AAAA";
    DomainRecordTypeEnum["Ns"] = "NS";
    DomainRecordTypeEnum["Mx"] = "MX";
    DomainRecordTypeEnum["Cname"] = "CNAME";
    DomainRecordTypeEnum["Txt"] = "TXT";
    DomainRecordTypeEnum["Srv"] = "SRV";
    DomainRecordTypeEnum["Ptr"] = "PTR";
    DomainRecordTypeEnum["Caa"] = "CAA";
})(DomainRecordTypeEnum || (DomainRecordTypeEnum = {}));
// DomainRecord
/**
 * A single record on a Domain.
 *
**/
var DomainRecord = /** @class */ (function (_super) {
    __extends(DomainRecord, _super);
    function DomainRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], DomainRecord.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], DomainRecord.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DomainRecord.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], DomainRecord.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priority" }),
        __metadata("design:type", Number)
    ], DomainRecord.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], DomainRecord.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service" }),
        __metadata("design:type", String)
    ], DomainRecord.prototype, "service", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tag" }),
        __metadata("design:type", String)
    ], DomainRecord.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target" }),
        __metadata("design:type", String)
    ], DomainRecord.prototype, "target", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ttl_sec" }),
        __metadata("design:type", Number)
    ], DomainRecord.prototype, "ttlSec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], DomainRecord.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated" }),
        __metadata("design:type", Date)
    ], DomainRecord.prototype, "updated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=weight" }),
        __metadata("design:type", Number)
    ], DomainRecord.prototype, "weight", void 0);
    return DomainRecord;
}(SpeakeasyBase));
export { DomainRecord };
// DomainRecordInput
/**
 * A single record on a Domain.
 *
**/
var DomainRecordInput = /** @class */ (function (_super) {
    __extends(DomainRecordInput, _super);
    function DomainRecordInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DomainRecordInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], DomainRecordInput.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priority" }),
        __metadata("design:type", Number)
    ], DomainRecordInput.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], DomainRecordInput.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service" }),
        __metadata("design:type", String)
    ], DomainRecordInput.prototype, "service", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tag" }),
        __metadata("design:type", String)
    ], DomainRecordInput.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=target" }),
        __metadata("design:type", String)
    ], DomainRecordInput.prototype, "target", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ttl_sec" }),
        __metadata("design:type", Number)
    ], DomainRecordInput.prototype, "ttlSec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], DomainRecordInput.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=weight" }),
        __metadata("design:type", Number)
    ], DomainRecordInput.prototype, "weight", void 0);
    return DomainRecordInput;
}(SpeakeasyBase));
export { DomainRecordInput };
