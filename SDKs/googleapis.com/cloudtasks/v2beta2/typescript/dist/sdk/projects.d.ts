import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cloudtasksProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    cloudtasksProjectsLocationsList(req: operations.CloudtasksProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudtasksProjectsLocationsListResponse>;
    /**
     * cloudtasksProjectsLocationsQueuesCreate - Creates a queue. Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not. WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.
    **/
    cloudtasksProjectsLocationsQueuesCreate(req: operations.CloudtasksProjectsLocationsQueuesCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudtasksProjectsLocationsQueuesCreateResponse>;
    /**
     * cloudtasksProjectsLocationsQueuesGetIamPolicy - Gets the access control policy for a Queue. Returns an empty policy if the resource exists and does not have a policy set. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent: * `cloudtasks.queues.getIamPolicy`
    **/
    cloudtasksProjectsLocationsQueuesGetIamPolicy(req: operations.CloudtasksProjectsLocationsQueuesGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CloudtasksProjectsLocationsQueuesGetIamPolicyResponse>;
    /**
     * cloudtasksProjectsLocationsQueuesList - Lists queues. Queues are returned in lexicographical order.
    **/
    cloudtasksProjectsLocationsQueuesList(req: operations.CloudtasksProjectsLocationsQueuesListRequest, config?: AxiosRequestConfig): Promise<operations.CloudtasksProjectsLocationsQueuesListResponse>;
    /**
     * cloudtasksProjectsLocationsQueuesPatch - Updates a queue. This method creates the queue if it does not exist and updates the queue if it does exist. Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not. WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.
    **/
    cloudtasksProjectsLocationsQueuesPatch(req: operations.CloudtasksProjectsLocationsQueuesPatchRequest, config?: AxiosRequestConfig): Promise<operations.CloudtasksProjectsLocationsQueuesPatchResponse>;
    /**
     * cloudtasksProjectsLocationsQueuesPause - Pauses the queue. If a queue is paused then the system will stop dispatching tasks until the queue is resumed via ResumeQueue. Tasks can still be added when the queue is paused. A queue is paused if its state is PAUSED.
    **/
    cloudtasksProjectsLocationsQueuesPause(req: operations.CloudtasksProjectsLocationsQueuesPauseRequest, config?: AxiosRequestConfig): Promise<operations.CloudtasksProjectsLocationsQueuesPauseResponse>;
    /**
     * cloudtasksProjectsLocationsQueuesPurge - Purges a queue by deleting all of its tasks. All tasks created before this method is called are permanently deleted. Purge operations can take up to one minute to take effect. Tasks might be dispatched before the purge takes effect. A purge is irreversible.
    **/
    cloudtasksProjectsLocationsQueuesPurge(req: operations.CloudtasksProjectsLocationsQueuesPurgeRequest, config?: AxiosRequestConfig): Promise<operations.CloudtasksProjectsLocationsQueuesPurgeResponse>;
    /**
     * cloudtasksProjectsLocationsQueuesResume - Resume a queue. This method resumes a queue after it has been PAUSED or DISABLED. The state of a queue is stored in the queue's state; after calling this method it will be set to RUNNING. WARNING: Resuming many high-QPS queues at the same time can lead to target overloading. If you are resuming high-QPS queues, follow the 500/50/5 pattern described in [Managing Cloud Tasks Scaling Risks](https://cloud.google.com/tasks/docs/manage-cloud-task-scaling).
    **/
    cloudtasksProjectsLocationsQueuesResume(req: operations.CloudtasksProjectsLocationsQueuesResumeRequest, config?: AxiosRequestConfig): Promise<operations.CloudtasksProjectsLocationsQueuesResumeResponse>;
    /**
     * cloudtasksProjectsLocationsQueuesSetIamPolicy - Sets the access control policy for a Queue. Replaces any existing policy. Note: The Cloud Console does not check queue-level IAM permissions yet. Project-level permissions are required to use the Cloud Console. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent: * `cloudtasks.queues.setIamPolicy`
    **/
    cloudtasksProjectsLocationsQueuesSetIamPolicy(req: operations.CloudtasksProjectsLocationsQueuesSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CloudtasksProjectsLocationsQueuesSetIamPolicyResponse>;
    /**
     * cloudtasksProjectsLocationsQueuesTasksAcknowledge - Acknowledges a pull task. The worker, that is, the entity that leased this task must call this method to indicate that the work associated with the task has finished. The worker must acknowledge a task within the lease_duration or the lease will expire and the task will become available to be leased again. After the task is acknowledged, it will not be returned by a later LeaseTasks, GetTask, or ListTasks.
    **/
    cloudtasksProjectsLocationsQueuesTasksAcknowledge(req: operations.CloudtasksProjectsLocationsQueuesTasksAcknowledgeRequest, config?: AxiosRequestConfig): Promise<operations.CloudtasksProjectsLocationsQueuesTasksAcknowledgeResponse>;
    /**
     * cloudtasksProjectsLocationsQueuesTasksBuffer - Creates and buffers a new task without the need to explicitly define a Task message. The queue must have HTTP target. To create the task with a custom ID, use the following format and set TASK_ID to your desired ID: projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID:buffer To create the task with an automatically generated ID, use the following format: projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks:buffer. Note: This feature is in its experimental stage. You must request access to the API through the [Cloud Tasks BufferTask Experiment Signup form](https://forms.gle/X8Zr5hiXH5tTGFqh8).
    **/
    cloudtasksProjectsLocationsQueuesTasksBuffer(req: operations.CloudtasksProjectsLocationsQueuesTasksBufferRequest, config?: AxiosRequestConfig): Promise<operations.CloudtasksProjectsLocationsQueuesTasksBufferResponse>;
    /**
     * cloudtasksProjectsLocationsQueuesTasksCancelLease - Cancel a pull task's lease. The worker can use this method to cancel a task's lease by setting its schedule_time to now. This will make the task available to be leased to the next caller of LeaseTasks.
    **/
    cloudtasksProjectsLocationsQueuesTasksCancelLease(req: operations.CloudtasksProjectsLocationsQueuesTasksCancelLeaseRequest, config?: AxiosRequestConfig): Promise<operations.CloudtasksProjectsLocationsQueuesTasksCancelLeaseResponse>;
    /**
     * cloudtasksProjectsLocationsQueuesTasksCreate - Creates a task and adds it to a queue. Tasks cannot be updated after creation; there is no UpdateTask command. * For App Engine queues, the maximum task size is 100KB. * For pull queues, the maximum task size is 1MB.
    **/
    cloudtasksProjectsLocationsQueuesTasksCreate(req: operations.CloudtasksProjectsLocationsQueuesTasksCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudtasksProjectsLocationsQueuesTasksCreateResponse>;
    /**
     * cloudtasksProjectsLocationsQueuesTasksDelete - Deletes a task. A task can be deleted if it is scheduled or dispatched. A task cannot be deleted if it has completed successfully or permanently failed.
    **/
    cloudtasksProjectsLocationsQueuesTasksDelete(req: operations.CloudtasksProjectsLocationsQueuesTasksDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CloudtasksProjectsLocationsQueuesTasksDeleteResponse>;
    /**
     * cloudtasksProjectsLocationsQueuesTasksGet - Gets a task.
    **/
    cloudtasksProjectsLocationsQueuesTasksGet(req: operations.CloudtasksProjectsLocationsQueuesTasksGetRequest, config?: AxiosRequestConfig): Promise<operations.CloudtasksProjectsLocationsQueuesTasksGetResponse>;
    /**
     * cloudtasksProjectsLocationsQueuesTasksLease - Leases tasks from a pull queue for lease_duration. This method is invoked by the worker to obtain a lease. The worker must acknowledge the task via AcknowledgeTask after they have performed the work associated with the task. The payload is intended to store data that the worker needs to perform the work associated with the task. To return the payloads in the response, set response_view to FULL. A maximum of 10 qps of LeaseTasks requests are allowed per queue. RESOURCE_EXHAUSTED is returned when this limit is exceeded. RESOURCE_EXHAUSTED is also returned when max_tasks_dispatched_per_second is exceeded.
    **/
    cloudtasksProjectsLocationsQueuesTasksLease(req: operations.CloudtasksProjectsLocationsQueuesTasksLeaseRequest, config?: AxiosRequestConfig): Promise<operations.CloudtasksProjectsLocationsQueuesTasksLeaseResponse>;
    /**
     * cloudtasksProjectsLocationsQueuesTasksList - Lists the tasks in a queue. By default, only the BASIC view is retrieved due to performance considerations; response_view controls the subset of information which is returned. The tasks may be returned in any order. The ordering may change at any time.
    **/
    cloudtasksProjectsLocationsQueuesTasksList(req: operations.CloudtasksProjectsLocationsQueuesTasksListRequest, config?: AxiosRequestConfig): Promise<operations.CloudtasksProjectsLocationsQueuesTasksListResponse>;
    /**
     * cloudtasksProjectsLocationsQueuesTasksRenewLease - Renew the current lease of a pull task. The worker can use this method to extend the lease by a new duration, starting from now. The new task lease will be returned in the task's schedule_time.
    **/
    cloudtasksProjectsLocationsQueuesTasksRenewLease(req: operations.CloudtasksProjectsLocationsQueuesTasksRenewLeaseRequest, config?: AxiosRequestConfig): Promise<operations.CloudtasksProjectsLocationsQueuesTasksRenewLeaseResponse>;
    /**
     * cloudtasksProjectsLocationsQueuesTasksRun - Forces a task to run now. When this method is called, Cloud Tasks will dispatch the task, even if the task is already running, the queue has reached its RateLimits or is PAUSED. This command is meant to be used for manual debugging. For example, RunTask can be used to retry a failed task after a fix has been made or to manually force a task to be dispatched now. The dispatched task is returned. That is, the task that is returned contains the status after the task is dispatched but before the task is received by its target. If Cloud Tasks receives a successful response from the task's target, then the task will be deleted; otherwise the task's schedule_time will be reset to the time that RunTask was called plus the retry delay specified in the queue's RetryConfig. RunTask returns NOT_FOUND when it is called on a task that has already succeeded or permanently failed. RunTask cannot be called on a pull task.
    **/
    cloudtasksProjectsLocationsQueuesTasksRun(req: operations.CloudtasksProjectsLocationsQueuesTasksRunRequest, config?: AxiosRequestConfig): Promise<operations.CloudtasksProjectsLocationsQueuesTasksRunResponse>;
    /**
     * cloudtasksProjectsLocationsQueuesTestIamPermissions - Returns permissions that a caller has on a Queue. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    **/
    cloudtasksProjectsLocationsQueuesTestIamPermissions(req: operations.CloudtasksProjectsLocationsQueuesTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.CloudtasksProjectsLocationsQueuesTestIamPermissionsResponse>;
}
