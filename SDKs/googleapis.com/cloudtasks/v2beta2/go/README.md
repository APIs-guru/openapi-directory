# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.CloudtasksAPIQueueUpdateRequest{
        Security: operations.CloudtasksAPIQueueUpdateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.CloudtasksAPIQueueUpdateQueryParams{
            DollarXgafv: "1",
            AccessToken: "harum",
            Alt: "proto",
            AppID: "voluptatem",
            Callback: "tenetur",
            Fields: "et",
            Key: "facilis",
            OauthToken: "architecto",
            PrettyPrint: true,
            QuotaUser: "qui",
            UploadType: "id",
            UploadProtocol: "soluta",
        },
        Request: &shared.HTTPBody{
            ContentType: "voluptas",
            Data: "saepe",
            Extensions: []map[string]interface{}{
                map[string]interface{}{
                    "aperiam": "perspiciatis",
                    "nemo": "tempore",
                },
                map[string]interface{}{
                    "voluptates": "magnam",
                    "a": "velit",
                },
            },
        },
    }
    
    res, err := s.API.CloudtasksAPIQueueUpdate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### api

* `CloudtasksAPIQueueUpdate` - Update queue list by uploading a queue.yaml file. The queue.yaml file is supplied in the request body as a YAML encoded string. This method was added to support gcloud clients versions before 322.0.0. New clients should use CreateQueue instead of this method.

### projects

* `CloudtasksProjectsLocationsList` - Lists information about the supported locations for this service.
* `CloudtasksProjectsLocationsQueuesCreate` - Creates a queue. Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not. WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.
* `CloudtasksProjectsLocationsQueuesGetIamPolicy` - Gets the access control policy for a Queue. Returns an empty policy if the resource exists and does not have a policy set. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent: * `cloudtasks.queues.getIamPolicy`
* `CloudtasksProjectsLocationsQueuesList` - Lists queues. Queues are returned in lexicographical order.
* `CloudtasksProjectsLocationsQueuesPatch` - Updates a queue. This method creates the queue if it does not exist and updates the queue if it does exist. Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not. WARNING: Using this method may have unintended side effects if you are using an App Engine `queue.yaml` or `queue.xml` file to manage your queues. Read [Overview of Queue Management and queue.yaml](https://cloud.google.com/tasks/docs/queue-yaml) before using this method.
* `CloudtasksProjectsLocationsQueuesPause` - Pauses the queue. If a queue is paused then the system will stop dispatching tasks until the queue is resumed via ResumeQueue. Tasks can still be added when the queue is paused. A queue is paused if its state is PAUSED.
* `CloudtasksProjectsLocationsQueuesPurge` - Purges a queue by deleting all of its tasks. All tasks created before this method is called are permanently deleted. Purge operations can take up to one minute to take effect. Tasks might be dispatched before the purge takes effect. A purge is irreversible.
* `CloudtasksProjectsLocationsQueuesResume` - Resume a queue. This method resumes a queue after it has been PAUSED or DISABLED. The state of a queue is stored in the queue's state; after calling this method it will be set to RUNNING. WARNING: Resuming many high-QPS queues at the same time can lead to target overloading. If you are resuming high-QPS queues, follow the 500/50/5 pattern described in [Managing Cloud Tasks Scaling Risks](https://cloud.google.com/tasks/docs/manage-cloud-task-scaling).
* `CloudtasksProjectsLocationsQueuesSetIamPolicy` - Sets the access control policy for a Queue. Replaces any existing policy. Note: The Cloud Console does not check queue-level IAM permissions yet. Project-level permissions are required to use the Cloud Console. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission on the specified resource parent: * `cloudtasks.queues.setIamPolicy`
* `CloudtasksProjectsLocationsQueuesTasksAcknowledge` - Acknowledges a pull task. The worker, that is, the entity that leased this task must call this method to indicate that the work associated with the task has finished. The worker must acknowledge a task within the lease_duration or the lease will expire and the task will become available to be leased again. After the task is acknowledged, it will not be returned by a later LeaseTasks, GetTask, or ListTasks.
* `CloudtasksProjectsLocationsQueuesTasksBuffer` - Creates and buffers a new task without the need to explicitly define a Task message. The queue must have HTTP target. To create the task with a custom ID, use the following format and set TASK_ID to your desired ID: projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID:buffer To create the task with an automatically generated ID, use the following format: projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks:buffer. Note: This feature is in its experimental stage. You must request access to the API through the [Cloud Tasks BufferTask Experiment Signup form](https://forms.gle/X8Zr5hiXH5tTGFqh8).
* `CloudtasksProjectsLocationsQueuesTasksCancelLease` - Cancel a pull task's lease. The worker can use this method to cancel a task's lease by setting its schedule_time to now. This will make the task available to be leased to the next caller of LeaseTasks.
* `CloudtasksProjectsLocationsQueuesTasksCreate` - Creates a task and adds it to a queue. Tasks cannot be updated after creation; there is no UpdateTask command. * For App Engine queues, the maximum task size is 100KB. * For pull queues, the maximum task size is 1MB.
* `CloudtasksProjectsLocationsQueuesTasksDelete` - Deletes a task. A task can be deleted if it is scheduled or dispatched. A task cannot be deleted if it has completed successfully or permanently failed.
* `CloudtasksProjectsLocationsQueuesTasksGet` - Gets a task.
* `CloudtasksProjectsLocationsQueuesTasksLease` - Leases tasks from a pull queue for lease_duration. This method is invoked by the worker to obtain a lease. The worker must acknowledge the task via AcknowledgeTask after they have performed the work associated with the task. The payload is intended to store data that the worker needs to perform the work associated with the task. To return the payloads in the response, set response_view to FULL. A maximum of 10 qps of LeaseTasks requests are allowed per queue. RESOURCE_EXHAUSTED is returned when this limit is exceeded. RESOURCE_EXHAUSTED is also returned when max_tasks_dispatched_per_second is exceeded.
* `CloudtasksProjectsLocationsQueuesTasksList` - Lists the tasks in a queue. By default, only the BASIC view is retrieved due to performance considerations; response_view controls the subset of information which is returned. The tasks may be returned in any order. The ordering may change at any time.
* `CloudtasksProjectsLocationsQueuesTasksRenewLease` - Renew the current lease of a pull task. The worker can use this method to extend the lease by a new duration, starting from now. The new task lease will be returned in the task's schedule_time.
* `CloudtasksProjectsLocationsQueuesTasksRun` - Forces a task to run now. When this method is called, Cloud Tasks will dispatch the task, even if the task is already running, the queue has reached its RateLimits or is PAUSED. This command is meant to be used for manual debugging. For example, RunTask can be used to retry a failed task after a fix has been made or to manually force a task to be dispatched now. The dispatched task is returned. That is, the task that is returned contains the status after the task is dispatched but before the task is received by its target. If Cloud Tasks receives a successful response from the task's target, then the task will be deleted; otherwise the task's schedule_time will be reset to the time that RunTask was called plus the retry delay specified in the queue's RetryConfig. RunTask returns NOT_FOUND when it is called on a task that has already succeeded or permanently failed. RunTask cannot be called on a pull task.
* `CloudtasksProjectsLocationsQueuesTestIamPermissions` - Returns permissions that a caller has on a Queue. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
