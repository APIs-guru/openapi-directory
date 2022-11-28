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
var ProviderInput = /** @class */ (function (_super) {
    __extends(ProviderInput, _super);
    function ProviderInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account" }),
        __metadata("design:type", String)
    ], ProviderInput.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=admin_contact" }),
        __metadata("design:type", String)
    ], ProviderInput.prototype, "adminContact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=asn" }),
        __metadata("design:type", Number)
    ], ProviderInput.prototype, "asn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], ProviderInput.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom_fields" }),
        __metadata("design:type", Map)
    ], ProviderInput.prototype, "customFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ProviderInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=noc_contact" }),
        __metadata("design:type", String)
    ], ProviderInput.prototype, "nocContact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portal_url" }),
        __metadata("design:type", String)
    ], ProviderInput.prototype, "portalUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slug" }),
        __metadata("design:type", String)
    ], ProviderInput.prototype, "slug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], ProviderInput.prototype, "tags", void 0);
    return ProviderInput;
}(SpeakeasyBase));
export { ProviderInput };
var Provider = /** @class */ (function (_super) {
    __extends(Provider, _super);
    function Provider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account" }),
        __metadata("design:type", String)
    ], Provider.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=admin_contact" }),
        __metadata("design:type", String)
    ], Provider.prototype, "adminContact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=asn" }),
        __metadata("design:type", Number)
    ], Provider.prototype, "asn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], Provider.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], Provider.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom_fields" }),
        __metadata("design:type", Map)
    ], Provider.prototype, "customFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Provider.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_updated" }),
        __metadata("design:type", Date)
    ], Provider.prototype, "lastUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Provider.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=noc_contact" }),
        __metadata("design:type", String)
    ], Provider.prototype, "nocContact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portal_url" }),
        __metadata("design:type", String)
    ], Provider.prototype, "portalUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slug" }),
        __metadata("design:type", String)
    ], Provider.prototype, "slug", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], Provider.prototype, "tags", void 0);
    return Provider;
}(SpeakeasyBase));
export { Provider };
