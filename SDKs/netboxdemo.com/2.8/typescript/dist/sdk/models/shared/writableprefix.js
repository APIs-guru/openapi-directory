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
export var WritablePrefixStatusEnum;
(function (WritablePrefixStatusEnum) {
    WritablePrefixStatusEnum["Container"] = "container";
    WritablePrefixStatusEnum["Active"] = "active";
    WritablePrefixStatusEnum["Reserved"] = "reserved";
    WritablePrefixStatusEnum["Deprecated"] = "deprecated";
})(WritablePrefixStatusEnum || (WritablePrefixStatusEnum = {}));
var WritablePrefixInput = /** @class */ (function (_super) {
    __extends(WritablePrefixInput, _super);
    function WritablePrefixInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom_fields" }),
        __metadata("design:type", Map)
    ], WritablePrefixInput.prototype, "customFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], WritablePrefixInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_pool" }),
        __metadata("design:type", Boolean)
    ], WritablePrefixInput.prototype, "isPool", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prefix" }),
        __metadata("design:type", String)
    ], WritablePrefixInput.prototype, "prefix", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=role" }),
        __metadata("design:type", Number)
    ], WritablePrefixInput.prototype, "role", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site" }),
        __metadata("design:type", Number)
    ], WritablePrefixInput.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], WritablePrefixInput.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], WritablePrefixInput.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tenant" }),
        __metadata("design:type", Number)
    ], WritablePrefixInput.prototype, "tenant", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vlan" }),
        __metadata("design:type", Number)
    ], WritablePrefixInput.prototype, "vlan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vrf" }),
        __metadata("design:type", Number)
    ], WritablePrefixInput.prototype, "vrf", void 0);
    return WritablePrefixInput;
}(SpeakeasyBase));
export { WritablePrefixInput };
