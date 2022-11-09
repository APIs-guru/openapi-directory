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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export var FederationStateEnum;
(function (FederationStateEnum) {
    FederationStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    FederationStateEnum["Creating"] = "CREATING";
    FederationStateEnum["Active"] = "ACTIVE";
    FederationStateEnum["Updating"] = "UPDATING";
    FederationStateEnum["Deleting"] = "DELETING";
    FederationStateEnum["Error"] = "ERROR";
})(FederationStateEnum || (FederationStateEnum = {}));
// Federation
/**
 * Represents a federation of multiple backend metastores.
**/
var Federation = /** @class */ (function (_super) {
    __extends(Federation, _super);
    function Federation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=backendMetastores", elemType: shared.BackendMetastore }),
        __metadata("design:type", Map)
    ], Federation.prototype, "backendMetastores", void 0);
    __decorate([
        Metadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Federation.prototype, "createTime", void 0);
    __decorate([
        Metadata({ data: "json, name=endpointUri" }),
        __metadata("design:type", String)
    ], Federation.prototype, "endpointUri", void 0);
    __decorate([
        Metadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Federation.prototype, "labels", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Federation.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Federation.prototype, "state", void 0);
    __decorate([
        Metadata({ data: "json, name=stateMessage" }),
        __metadata("design:type", String)
    ], Federation.prototype, "stateMessage", void 0);
    __decorate([
        Metadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], Federation.prototype, "uid", void 0);
    __decorate([
        Metadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Federation.prototype, "updateTime", void 0);
    __decorate([
        Metadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], Federation.prototype, "version", void 0);
    return Federation;
}(SpeakeasyBase));
export { Federation };
