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
import { BitbucketServerRepositoryId } from "./bitbucketserverrepositoryid";
import { BitbucketServerSecrets } from "./bitbucketserversecrets";
// BitbucketServerConfig
/**
 * BitbucketServerConfig represents the configuration for a Bitbucket Server.
**/
var BitbucketServerConfig = /** @class */ (function (_super) {
    __extends(BitbucketServerConfig, _super);
    function BitbucketServerConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apiKey" }),
        __metadata("design:type", String)
    ], BitbucketServerConfig.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectedRepositories", elemType: BitbucketServerRepositoryId }),
        __metadata("design:type", Array)
    ], BitbucketServerConfig.prototype, "connectedRepositories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], BitbucketServerConfig.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hostUri" }),
        __metadata("design:type", String)
    ], BitbucketServerConfig.prototype, "hostUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], BitbucketServerConfig.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=peeredNetwork" }),
        __metadata("design:type", String)
    ], BitbucketServerConfig.prototype, "peeredNetwork", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secrets" }),
        __metadata("design:type", BitbucketServerSecrets)
    ], BitbucketServerConfig.prototype, "secrets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sslCa" }),
        __metadata("design:type", String)
    ], BitbucketServerConfig.prototype, "sslCa", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], BitbucketServerConfig.prototype, "username", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webhookKey" }),
        __metadata("design:type", String)
    ], BitbucketServerConfig.prototype, "webhookKey", void 0);
    return BitbucketServerConfig;
}(SpeakeasyBase));
export { BitbucketServerConfig };
// BitbucketServerConfigInput
/**
 * BitbucketServerConfig represents the configuration for a Bitbucket Server.
**/
var BitbucketServerConfigInput = /** @class */ (function (_super) {
    __extends(BitbucketServerConfigInput, _super);
    function BitbucketServerConfigInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apiKey" }),
        __metadata("design:type", String)
    ], BitbucketServerConfigInput.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], BitbucketServerConfigInput.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hostUri" }),
        __metadata("design:type", String)
    ], BitbucketServerConfigInput.prototype, "hostUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], BitbucketServerConfigInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=peeredNetwork" }),
        __metadata("design:type", String)
    ], BitbucketServerConfigInput.prototype, "peeredNetwork", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secrets" }),
        __metadata("design:type", BitbucketServerSecrets)
    ], BitbucketServerConfigInput.prototype, "secrets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sslCa" }),
        __metadata("design:type", String)
    ], BitbucketServerConfigInput.prototype, "sslCa", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], BitbucketServerConfigInput.prototype, "username", void 0);
    return BitbucketServerConfigInput;
}(SpeakeasyBase));
export { BitbucketServerConfigInput };
