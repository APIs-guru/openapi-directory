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
import { UploadSession } from "./uploadsession";
export var OperationStatusEnum;
(function (OperationStatusEnum) {
    OperationStatusEnum["Pending"] = "pending";
    OperationStatusEnum["Done"] = "done";
})(OperationStatusEnum || (OperationStatusEnum = {}));
export var OperationTaskTypeEnum;
(function (OperationTaskTypeEnum) {
    OperationTaskTypeEnum["Analysis"] = "analysis";
    OperationTaskTypeEnum["Codereview"] = "codereview";
    OperationTaskTypeEnum["Queryjob"] = "queryjob";
})(OperationTaskTypeEnum || (OperationTaskTypeEnum = {}));
var Operation = /** @class */ (function (_super) {
    __extends(Operation, _super);
    function Operation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Operation.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Operation.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=task-result" }),
        __metadata("design:type", Object)
    ], Operation.prototype, "taskResult", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=task-result-url" }),
        __metadata("design:type", String)
    ], Operation.prototype, "taskResultUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=task-type" }),
        __metadata("design:type", String)
    ], Operation.prototype, "taskType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uploads", elemType: UploadSession }),
        __metadata("design:type", Map)
    ], Operation.prototype, "uploads", void 0);
    return Operation;
}(SpeakeasyBase));
export { Operation };
