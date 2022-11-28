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
var DeleteServersIdPathParams = /** @class */ (function (_super) {
    __extends(DeleteServersIdPathParams, _super);
    function DeleteServersIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], DeleteServersIdPathParams.prototype, "id", void 0);
    return DeleteServersIdPathParams;
}(SpeakeasyBase));
export { DeleteServersIdPathParams };
// DeleteServersId200ApplicationJsonActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var DeleteServersId200ApplicationJsonActionError = /** @class */ (function (_super) {
    __extends(DeleteServersId200ApplicationJsonActionError, _super);
    function DeleteServersId200ApplicationJsonActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], DeleteServersId200ApplicationJsonActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteServersId200ApplicationJsonActionError.prototype, "message", void 0);
    return DeleteServersId200ApplicationJsonActionError;
}(SpeakeasyBase));
export { DeleteServersId200ApplicationJsonActionError };
var DeleteServersId200ApplicationJsonActionResources = /** @class */ (function (_super) {
    __extends(DeleteServersId200ApplicationJsonActionResources, _super);
    function DeleteServersId200ApplicationJsonActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], DeleteServersId200ApplicationJsonActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], DeleteServersId200ApplicationJsonActionResources.prototype, "type", void 0);
    return DeleteServersId200ApplicationJsonActionResources;
}(SpeakeasyBase));
export { DeleteServersId200ApplicationJsonActionResources };
export var DeleteServersId200ApplicationJsonActionStatusEnum;
(function (DeleteServersId200ApplicationJsonActionStatusEnum) {
    DeleteServersId200ApplicationJsonActionStatusEnum["Success"] = "success";
    DeleteServersId200ApplicationJsonActionStatusEnum["Running"] = "running";
    DeleteServersId200ApplicationJsonActionStatusEnum["Error"] = "error";
})(DeleteServersId200ApplicationJsonActionStatusEnum || (DeleteServersId200ApplicationJsonActionStatusEnum = {}));
var DeleteServersId200ApplicationJsonAction = /** @class */ (function (_super) {
    __extends(DeleteServersId200ApplicationJsonAction, _super);
    function DeleteServersId200ApplicationJsonAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], DeleteServersId200ApplicationJsonAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", DeleteServersId200ApplicationJsonActionError)
    ], DeleteServersId200ApplicationJsonAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], DeleteServersId200ApplicationJsonAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], DeleteServersId200ApplicationJsonAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], DeleteServersId200ApplicationJsonAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: DeleteServersId200ApplicationJsonActionResources }),
        __metadata("design:type", Array)
    ], DeleteServersId200ApplicationJsonAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], DeleteServersId200ApplicationJsonAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], DeleteServersId200ApplicationJsonAction.prototype, "status", void 0);
    return DeleteServersId200ApplicationJsonAction;
}(SpeakeasyBase));
export { DeleteServersId200ApplicationJsonAction };
var DeleteServersId200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteServersId200ApplicationJson, _super);
    function DeleteServersId200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", DeleteServersId200ApplicationJsonAction)
    ], DeleteServersId200ApplicationJson.prototype, "action", void 0);
    return DeleteServersId200ApplicationJson;
}(SpeakeasyBase));
export { DeleteServersId200ApplicationJson };
var DeleteServersIdRequest = /** @class */ (function (_super) {
    __extends(DeleteServersIdRequest, _super);
    function DeleteServersIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteServersIdPathParams)
    ], DeleteServersIdRequest.prototype, "pathParams", void 0);
    return DeleteServersIdRequest;
}(SpeakeasyBase));
export { DeleteServersIdRequest };
var DeleteServersIdResponse = /** @class */ (function (_super) {
    __extends(DeleteServersIdResponse, _super);
    function DeleteServersIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteServersIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteServersId200ApplicationJson)
    ], DeleteServersIdResponse.prototype, "deleteServersId200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteServersIdResponse.prototype, "statusCode", void 0);
    return DeleteServersIdResponse;
}(SpeakeasyBase));
export { DeleteServersIdResponse };
