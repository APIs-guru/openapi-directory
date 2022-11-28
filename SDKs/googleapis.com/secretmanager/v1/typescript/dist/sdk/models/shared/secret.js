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
import { Replication } from "./replication";
import { Rotation } from "./rotation";
import { Topic } from "./topic";
// Secret
/**
 * A Secret is a logical secret whose value and versions can be accessed. A Secret is made up of zero or more SecretVersions that represent the secret data.
**/
var Secret = /** @class */ (function (_super) {
    __extends(Secret, _super);
    function Secret() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotations" }),
        __metadata("design:type", Map)
    ], Secret.prototype, "annotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Secret.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], Secret.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expireTime" }),
        __metadata("design:type", String)
    ], Secret.prototype, "expireTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Secret.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Secret.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replication" }),
        __metadata("design:type", Replication)
    ], Secret.prototype, "replication", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rotation" }),
        __metadata("design:type", Rotation)
    ], Secret.prototype, "rotation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topics", elemType: Topic }),
        __metadata("design:type", Array)
    ], Secret.prototype, "topics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ttl" }),
        __metadata("design:type", String)
    ], Secret.prototype, "ttl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=versionAliases" }),
        __metadata("design:type", Map)
    ], Secret.prototype, "versionAliases", void 0);
    return Secret;
}(SpeakeasyBase));
export { Secret };
// SecretInput
/**
 * A Secret is a logical secret whose value and versions can be accessed. A Secret is made up of zero or more SecretVersions that represent the secret data.
**/
var SecretInput = /** @class */ (function (_super) {
    __extends(SecretInput, _super);
    function SecretInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotations" }),
        __metadata("design:type", Map)
    ], SecretInput.prototype, "annotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], SecretInput.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expireTime" }),
        __metadata("design:type", String)
    ], SecretInput.prototype, "expireTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], SecretInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replication" }),
        __metadata("design:type", Replication)
    ], SecretInput.prototype, "replication", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rotation" }),
        __metadata("design:type", Rotation)
    ], SecretInput.prototype, "rotation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topics", elemType: Topic }),
        __metadata("design:type", Array)
    ], SecretInput.prototype, "topics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ttl" }),
        __metadata("design:type", String)
    ], SecretInput.prototype, "ttl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=versionAliases" }),
        __metadata("design:type", Map)
    ], SecretInput.prototype, "versionAliases", void 0);
    return SecretInput;
}(SpeakeasyBase));
export { SecretInput };
