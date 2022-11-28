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
// LongviewClientApps
/**
 * The apps this Client is monitoring on your Linode. This is configured when you install the Longview Client application, and is present here for information purposes only.
 *
**/
var LongviewClientApps = /** @class */ (function (_super) {
    __extends(LongviewClientApps, _super);
    function LongviewClientApps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apache" }),
        __metadata("design:type", Boolean)
    ], LongviewClientApps.prototype, "apache", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mysql" }),
        __metadata("design:type", Boolean)
    ], LongviewClientApps.prototype, "mysql", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nginx" }),
        __metadata("design:type", Boolean)
    ], LongviewClientApps.prototype, "nginx", void 0);
    return LongviewClientApps;
}(SpeakeasyBase));
export { LongviewClientApps };
// LongviewClient
/**
 * A LongviewClient is a single monitor set up to track statistics about one of your servers.
 *
**/
var LongviewClient = /** @class */ (function (_super) {
    __extends(LongviewClient, _super);
    function LongviewClient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=api_key" }),
        __metadata("design:type", String)
    ], LongviewClient.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apps" }),
        __metadata("design:type", LongviewClientApps)
    ], LongviewClient.prototype, "apps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], LongviewClient.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], LongviewClient.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=install_code" }),
        __metadata("design:type", String)
    ], LongviewClient.prototype, "installCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], LongviewClient.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated" }),
        __metadata("design:type", Date)
    ], LongviewClient.prototype, "updated", void 0);
    return LongviewClient;
}(SpeakeasyBase));
export { LongviewClient };
// LongviewClientInput
/**
 * A LongviewClient is a single monitor set up to track statistics about one of your servers.
 *
**/
var LongviewClientInput = /** @class */ (function (_super) {
    __extends(LongviewClientInput, _super);
    function LongviewClientInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], LongviewClientInput.prototype, "label", void 0);
    return LongviewClientInput;
}(SpeakeasyBase));
export { LongviewClientInput };
