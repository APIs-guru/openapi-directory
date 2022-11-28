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
import { MemoryInfoRepresentation } from "./memoryinforepresentation";
import { PasswordPolicyTypeRepresentation } from "./passwordpolicytyperepresentation";
import { ProfileInfoRepresentation } from "./profileinforepresentation";
import { SystemInfoRepresentation } from "./systeminforepresentation";
var ServerInfoRepresentation = /** @class */ (function (_super) {
    __extends(ServerInfoRepresentation, _super);
    function ServerInfoRepresentation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=builtinProtocolMappers" }),
        __metadata("design:type", Map)
    ], ServerInfoRepresentation.prototype, "builtinProtocolMappers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientImporters" }),
        __metadata("design:type", Array)
    ], ServerInfoRepresentation.prototype, "clientImporters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientInstallations" }),
        __metadata("design:type", Map)
    ], ServerInfoRepresentation.prototype, "clientInstallations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=componentTypes" }),
        __metadata("design:type", Map)
    ], ServerInfoRepresentation.prototype, "componentTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enums" }),
        __metadata("design:type", Map)
    ], ServerInfoRepresentation.prototype, "enums", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identityProviders" }),
        __metadata("design:type", Array)
    ], ServerInfoRepresentation.prototype, "identityProviders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memoryInfo" }),
        __metadata("design:type", MemoryInfoRepresentation)
    ], ServerInfoRepresentation.prototype, "memoryInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=passwordPolicies", elemType: PasswordPolicyTypeRepresentation }),
        __metadata("design:type", Array)
    ], ServerInfoRepresentation.prototype, "passwordPolicies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=profileInfo" }),
        __metadata("design:type", ProfileInfoRepresentation)
    ], ServerInfoRepresentation.prototype, "profileInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocolMapperTypes" }),
        __metadata("design:type", Map)
    ], ServerInfoRepresentation.prototype, "protocolMapperTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=providers" }),
        __metadata("design:type", Map)
    ], ServerInfoRepresentation.prototype, "providers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=socialProviders" }),
        __metadata("design:type", Array)
    ], ServerInfoRepresentation.prototype, "socialProviders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=systemInfo" }),
        __metadata("design:type", SystemInfoRepresentation)
    ], ServerInfoRepresentation.prototype, "systemInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=themes" }),
        __metadata("design:type", Map)
    ], ServerInfoRepresentation.prototype, "themes", void 0);
    return ServerInfoRepresentation;
}(SpeakeasyBase));
export { ServerInfoRepresentation };
